import create from 'zustand';
import { devtools, combine } from 'zustand/middleware';
import { StoreActions } from '@src/stores';

import contractABI from './contract-abi.json';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { AbiItem } from 'web3-utils';

export type Web3StoreState = {
  error: {
    connectWallet: string | null;
    mintNFT: string | null;
  };
  txHash: string | null;
  walletAddress: string | null;
  nfts: NFT[];
};

export type Web3StoreAction = {
  connectWallet: () => void;
  mintNFT: () => void;
};

export enum Web3Store {
  Name = 'Web3Store',
  ConnectWalletSuccess = 'ConnectWalletSuccess',
  ConnectWalletFail = 'ConnectWalletFail',
  MintNFTSuccess = 'MintNFTSuccess',
  MintNFTFail = 'MintNFTFail',
  ResetStore = 'ResetStore',
}

const contractAddress = '0xf63F71584d0cF62592f1e077ceB2527a43ca91d9';
const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const web3 = createAlchemyWeb3(alchemyKey || '');

const name = Web3Store.Name;
const initialState: Web3StoreState = {
  error: {
    connectWallet: null,
    mintNFT: null,
  },
  txHash: null,
  walletAddress: null,
  nfts: [],
};
const actions: StoreActions<Web3StoreState, Web3StoreAction> = (set) => ({
  connectWallet: async () => {
    try {
      const addressArray: string[] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      set(
        () => ({ walletAddress: addressArray[0] }),
        false,
        Web3Store.ConnectWalletSuccess,
      );
    } catch (error) {
      set(
        (state) => ({
          error: {
            ...state.error,
            connectWallet: (error as Error).message,
          },
        }),
        false,
        Web3Store.ConnectWalletFail,
      );
    }
  },
  mintNFT: async () => {
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

      set(() => ({ txHash }), false, Web3Store.MintNFTSuccess);
    } catch (error) {
      set(
        (state) => ({
          error: {
            ...state.error,
            mintNFT: (error as Error).message,
          },
        }),
        false,
        Web3Store.MintNFTFail,
      );
      return {
        status: false,
        txHash: null,
      };
    }
  },
});
const useStore = create(devtools(combine(initialState, actions), { name }));

export function useWeb3() {
  const state = useStore();
  return { ...state };
}
