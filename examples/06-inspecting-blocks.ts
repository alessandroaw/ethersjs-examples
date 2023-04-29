import { Contract, JsonRpcProvider, formatEther } from "ethers";

// Use local test node Anvil forking BSC
const PROVIDER_URL = "HTTP://127.0.0.1:8545";
// const PROVIDER_URL = "https://nodes.pancakeswap.info";

// Connecting to provider
const provider = new JsonRpcProvider(PROVIDER_URL);

const main = async () => {
  // getting the current block number
  const currentBlockNumber = await provider.getBlockNumber();
  console.log(currentBlockNumber);

  const blockInfo = await provider.getBlock(currentBlockNumber);
  if (!blockInfo) return;

  const { transactions } = blockInfo;

  console.table(transactions);

  console.log(await provider.getTransaction(transactions[0]));
};

main();
