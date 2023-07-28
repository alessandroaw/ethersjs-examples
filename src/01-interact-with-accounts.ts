import { JsonRpcProvider, ethers, formatEther } from "ethers";

// Use local test node
// const PROVIDER_URL = "HTTP://127.0.0.1:8545";
const PROVIDER_URL = "https://api.zan.top/node/v1/eth/sepolia/public";
const provider = new JsonRpcProvider(PROVIDER_URL);

// Address of the account
// const account = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const account = "0xc0CCA7ffC5B5a3A70Ac934E62c65cEB3037e1DC9";

const main = async () => {
  const balance = await provider.getBalance(account);
  console.log(`ETH balance is : ${formatEther(balance)} ETH`);
};

main();
