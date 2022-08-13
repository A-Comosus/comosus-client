import { useState } from 'react';
import { Button, Text } from '@src/common/components';
import { useToast } from '@chakra-ui/react';
import { connectWallet, mintNFT } from '../util/interact';
import {
  AdminSectionContainer,
  AdminSectionItemCard,
} from '@src/modules/admin/components';

export function Wallet() {
  const toast = useToast();

  const [walletAddress, setWalletAddress] = useState<string | null>();

  const onConnect = async () => {
    const { address } = await connectWallet();
    setWalletAddress(address);
  };

  const onMint = async () => {
    const { status, description } = await mintNFT();
    toast({ status, description });
  };

  const truncatedWalletAddress = walletAddress
    ? String(walletAddress).substring(0, 6) +
      '...' +
      String(walletAddress).substring(38)
    : '???';

  return (
    <AdminSectionContainer heading="Wallet">
      <AdminSectionItemCard>
        <Text as="h3" color="#F8F5F1" fontWeight={600} fontSize="1.6rem">
          Connect Your Crypto Wallet
        </Text>

        <Text as="p" color="#F8F5F1" fontSize="1.4rem">
          {`Wallet Address: ${truncatedWalletAddress.toUpperCase()}`}
        </Text>

        {walletAddress ? (
          <Button id="mintButton" onClick={onMint}>
            Mint NFT
          </Button>
        ) : (
          <Button id="walletButton" onClick={onConnect}>
            Connect
          </Button>
        )}
      </AdminSectionItemCard>
    </AdminSectionContainer>
  );
}
