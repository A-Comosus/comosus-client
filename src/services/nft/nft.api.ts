import { useApiClient } from '@src/common/contexts';
import { useWeb3 } from '@src/stores';
import { isNil } from 'lodash';
import { useQuery } from 'react-query';

const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const network = process.env.NEXT_PUBLIC_ALCHEMY_NETWORK;
const getNFTsUri = `https://${network}/nft/v2/${alchemyApiKey}/getNFTs`;

type GetNFTsUriResponse = {
  ownedNfts: NFT[];
  totalCount: number;
  blockHash: string;
};

export function useGetNFTsQuery() {
  const { restClient } = useApiClient();
  const { walletAddress } = useWeb3();

  const {
    data: nfts,
    error,
    isLoading,
  } = useQuery(
    ['NFTs'],
    async () => {
      return await restClient.get<GetNFTsUriResponse>(getNFTsUri, {
        params: {
          owner: walletAddress,
        },
      });
    },
    {
      enabled: !isNil(walletAddress),
      select: (data) => data.data.ownedNfts,
    },
  );

  return { nfts, error, isLoading };
}
