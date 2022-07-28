import { useState } from 'react';
import { Button } from '@src/common/components';
import { VStack } from '@chakra-ui/react';
import { connectWallet, mintNFT } from './util/interact';

const Minter = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>();
  const [status, setStatus] = useState<boolean>();

  const connectWalletPressed = async () => {
    const { address, status } = await connectWallet();
    setStatus(status);
    setWalletAddress(address);
  };

  const onMintPressed = async () => {
    const { status } = await mintNFT();
    setStatus(status);
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
};

export default Minter;
