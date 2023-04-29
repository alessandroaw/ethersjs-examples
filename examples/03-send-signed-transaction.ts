import {
  Contract,
  JsonRpcProvider,
  Wallet,
  formatEther,
  parseEther,
} from "ethers";

// Use local test node Anvil forking BSC
const PROVIDER_URL = "HTTP://127.0.0.1:8545";

// Connecting to provider
const provider = new JsonRpcProvider(PROVIDER_URL);

// Mock account address

// Sender
const sender = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const senderPK =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const wallet = new Wallet(senderPK, provider);

// Recipient
const receiver = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

const main = async () => {
  console.log("==initial==");
  console.log({
    senderBalance: formatEther(await provider.getBalance(sender)),
    receiverBalance: formatEther(await provider.getBalance(receiver)),
  });

  // SEND ETHER
  const tx = await wallet.sendTransaction({
    to: receiver,
    value: parseEther("2"),
  });

  // Wait for transaction to be mined
  // console.log(tx);
  await tx.wait();
  console.log();
  console.log(tx);
  console.log();

  // After transfer
  console.log("==Final==");
  console.log({
    senderBalance: formatEther(await provider.getBalance(sender)),
    receiverBalance: formatEther(await provider.getBalance(receiver)),
  });
};

main();
