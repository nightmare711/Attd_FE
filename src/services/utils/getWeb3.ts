import Web3 from "web3";

export const getWeb3 = (provider?: any) => {
  return new Web3(provider || "ws://localhost:8545");
};

export const getContract = (abi: any, address: string, provider: any) => {
  const web3 = getWeb3(provider);
  const contract = new web3.eth.Contract(abi, address);
  return contract;
};
