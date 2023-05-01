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

// ABI short version
const ERC20_ABI = [
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

// Address of Cake Token Contract
const contractAddress = "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82";

// Mock account address
const sender = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const senderPK =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const wallet = new Wallet(senderPK, provider);

const receiver = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

// Connecting to smart contract
const contract = new Contract(contractAddress, ERC20_ABI, provider);

const main = async () => {
  // Before transfer
  console.log("==Initial==");
  console.log({
    senderCakeBalance: formatEther(await contract.balanceOf(sender)),
    receiverCakeBalance: formatEther(await contract.balanceOf(receiver)),
  });

  const contractWithWallet = contract.connect(wallet);

  const tx = await (contractWithWallet as Contract).transfer(
    receiver,
    parseEther("1"),
    {
      gasLimit: 300000,
    }
  );
  console.log("Transaction Hash:", tx.hash);

  // Wait for transaction to be mined
  await tx.wait();
  console.log(tx);
  console.log("Transaction is mined");

  // After transfer
  console.log("==Final==");
  console.log({
    senderCakeBalance: formatEther(await contract.balanceOf(sender)),
    receiverCakeBalance: formatEther(await contract.balanceOf(receiver)),
  });
};

main();
