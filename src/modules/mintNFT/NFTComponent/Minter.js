import { useEffect, useState } from 'react';
import { Button } from '@src/common/components';
import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT,
} from './util/interact.js';

const Minter = (props) => {
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const { address, status } = async () => await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus('👆🏽 Write a message in the text-field above.');
        } else {
          setWallet('');
          setStatus('🦊 Connect to Metamask using the top right button.');
        }
      });
    } else {
      setStatus(
        <p>
          {' '}
          🦊{' '}
          <a
            target="_blank"
            href={`https://metamask.io/download.html`}
            rel="noreferrer"
          >
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>,
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { status } = await mintNFT();
    setStatus(status);
  };

  return (
    <div className="Minter">
      <Button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress > 0 ? (
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
        {status}
      </p>
    </div>
  );
};

export default Minter;
