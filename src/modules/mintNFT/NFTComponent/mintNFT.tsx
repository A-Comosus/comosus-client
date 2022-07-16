import { InjectedConnector } from '@web3-react/injected-connector';
import { useWeb3React } from '@web3-react/core';
import web3 from './web3';
import Nft from './Nft';

export default function MintNft() {
  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  });
  const { account, activate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  const mint = async () => {
    const accounts = await web3.eth.getAccounts();
    await Nft.methods.mintAComosus(1).send({
      from: accounts[0],
      value: web3.utils.toWei('0.03', 'ether'),
    });
  };
  return (
    <div className="Mint_NFT">
      <p>ETH Address: {account}</p>
      <button onClick={connect}>Connect to MetaMask</button>
      <button onClick={mint}>Mint</button>
    </div>
  );
}
