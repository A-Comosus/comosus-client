import React from 'react';

import {
  AdminSectionContainer,
  AdminSectionItemCard,
} from '@src/modules/admin/components';
import { NFTCard } from './OwnedNFTs.NFTCard';

import { Text } from '@src/common/components';
import { isEmpty } from 'lodash';

type OwnedNFTsProps = { nfts: NFT[] };
export function OwnedNFTs({ nfts }: OwnedNFTsProps) {
  if (isEmpty(nfts)) {
    return (
      <AdminSectionContainer heading="Owned NFTs">
        <AdminSectionItemCard border="2px solid #A2FF2A">
          <Text as="p" color="#F8F5F1" fontSize="1.6rem">
            {'Connect your wallet to show the list of NFTs you own!'}
          </Text>
        </AdminSectionItemCard>
      </AdminSectionContainer>
    );
  }

  return (
    <AdminSectionContainer heading={`Owned NFTs (Total ${nfts.length})`}>
      {nfts.map((nft) => (
        <NFTCard key={nft.id.tokenId} nft={nft} />
      ))}
    </AdminSectionContainer>
  );
}
