import { JsonRpcProvider, ethers, formatEther } from "ethers";

// Use local test node
const PROVIDER_URL = "HTTP://127.0.0.1:8545";
const provider = new JsonRpcProvider(PROVIDER_URL);

// Address of the account
const account = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

const main = async () => {
  const balance = await provider.getBalance(account);
  console.log(`ETH balance is : ${formatEther(balance)} ETH`);
};

main();
