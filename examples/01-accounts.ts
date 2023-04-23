import { ethers } from "ethers";

const PROVIDER_URL = "HTTP://127.0.0.1:7545";
const provider = new ethers.JsonRpcProvider(PROVIDER_URL);

const account = "0x8bED067f7450DfA5623F194Bc54929b0b318B44C";

const main = async () => {
  const balance = await provider.getBalance(account);
  console.log(`ETH balance is : ${ethers.formatEther(balance)} ETH`);
};

main();
