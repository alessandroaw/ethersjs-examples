import { Contract, ethers } from "ethers";

// Use local test node Anvil forking BSC
const PROVIDER_URL = "HTTP://127.0.0.1:8545";

// Connecting to provider
const provider = new ethers.JsonRpcProvider(PROVIDER_URL);

// ABI short version
const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

// Address of PancakeSwap Token
const contractAddress = "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82";

// Mock account address
const accountAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

// Connecting to smart contract
const contract = new Contract(contractAddress, ERC20_ABI, provider);

const main = async () => {
  // Calling read method from the contract
  const name = await contract.name();
  const symbol = await contract.symbol();
  const balance = await contract.balanceOf(accountAddress);

  console.log(`name: ${name}`);
  console.log(`symbol: ${symbol}`);
  console.log(`balance: ${balance} CAKE`);
};

main();
