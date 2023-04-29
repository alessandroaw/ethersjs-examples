import { Contract, JsonRpcProvider, formatEther } from "ethers";

// Use local test node Anvil forking BSC
const PROVIDER_URL = "HTTP://127.0.0.1:8545";
// const PROVIDER_URL = "https://nodes.pancakeswap.info";

// Connecting to provider
const provider = new JsonRpcProvider(PROVIDER_URL);

// ABI short version
const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
  "event Transfer(address indexed from, address indexed to, uint256 value)",
];

// Address of CAKE Token
const contractAddress = "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82";

// Connecting to smart contract
const contract = new Contract(contractAddress, ERC20_ABI, provider);

const main = async () => {
  // getting the current block number
  const currentBlockNumber = await provider.getBlockNumber();
  console.log(currentBlockNumber);

  const transferEvents = await contract.queryFilter(
    "Transfer",
    currentBlockNumber - 10,
    currentBlockNumber
  );

  console.log(transferEvents);
  // console.table(transferEvents);
};

main();
