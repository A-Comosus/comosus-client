import contractABI from '../contract-abi.json';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { AbiItem } from 'web3-utils';

const contractAddress = '0xf63F71584d0cF62592f1e077ceB2527a43ca91d9';
const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const web3 = createAlchemyWeb3(alchemyKey || '');

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray: string[] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const obj = {
        address: addressArray[0],
        status: true,
      };
      return obj;
    } catch (err) {
      return {
        address: null,
        status: false,
      };
    }
  } else {
    return {
      address: null,
      status: false,
    };
  }
};

// This would keep the contract in case if we need further calls
// async function loadContract() {
//   return new web3.eth.Contract(contractABI, contractAddress);
// }

export async function mintNFT(): Promise<{
  status: 'success' | 'error';
  description: string;
}> {
  window.contract = await new web3.eth.Contract(
    contractABI as AbiItem[],
    contractAddress,
  );

  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.contract.methods
      .mint(window.ethereum.selectedAddress, 1)
      .encodeABI(),
  };

  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    return {
      status: 'success',
      description:
        '✅ Check out your NFT at: https://testnets.opensea.io/ and transaction on Etherscan: https://ropsten.etherscan.io/tx/ and ' +
        txHash,
    };
  } catch (error) {
    return {
      status: 'error',
      description: '😥 Something went wrong: ' + (error as Error).message,
    };
  }
}
