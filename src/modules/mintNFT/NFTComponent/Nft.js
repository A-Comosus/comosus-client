import web3 from './web3';

const contractAddress = 'your_contract_address';

const abi = ['your_abi'];

// @ts-ignore
export default new web3.eth.Contract(abi, contractAddress);
