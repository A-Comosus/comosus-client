declare interface Window {
  ethereum: any;
  contract: any;
}

type OwnedNFTs = {
  ownedNfts: NFT[];
  totalCount: number;
  blockHash: string;
};

type NFT = {
  contract: {
    address: string;
  };
  id: {
    tokenId: string;
    tokenMetadata: {
      tokenType: 'ERC721';
    };
  };
  balance: string;
  title: string;
  description: string;
  tokenUri: {
    raw: string;
    gateway: string;
  };
  media: {
    raw: string;
    gateway: string;
  }[];
  metadata: {
    date: number;
    image: string;
    dna: string;
    name: string;
    description: string;
    edition: number;
    attributes: {
      value: string;
      trait_type: string;
    }[];
    compiler: string;
  };
  timeLastUpdated: string;
  error?: string;
};
