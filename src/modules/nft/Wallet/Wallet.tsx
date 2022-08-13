import { useState } from 'react';
import { Button } from '@src/common/components';
import { useToast, VStack } from '@chakra-ui/react';
import { connectWallet, mintNFT } from '../util/interact';

export function Wallet() {
  const toast = useToast();

  const [walletAddress, setWalletAddress] = useState<string | null>();
  const [status, setStatus] = useState<boolean>();

  const connectWalletPressed = async () => {
    const { address, status } = await connectWallet();
    setStatus(status);
    setWalletAddress(address);
  };

  const onMintPressed = async () => {
    const { status, description } = await mintNFT();
    toast({ status, description });
    setStatus(status === 'success' ? true : false);
  };

  return (
    <VStack align="stretch" gap={'20px'}>
      <Button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress ? (
          'Connected: ' +
          String(walletAddress).substring(0, 6) +
          '...' +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </Button>
      <Button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </Button>
      <p id="status" style={{ color: 'red' }}>
        {status ?? 'error connecting to metamask'}
      </p>
    </VStack>
  );
}
