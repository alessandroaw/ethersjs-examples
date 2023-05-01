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

const SWAP_ABI = [
  "function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)",
];

// Address of PancakeSwap Token
const contractAddress = "0x10ED43C718714eb63d5aA57B78B54704E256024E";

// Mock account address
const account = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const privateKey =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const wallet = new Wallet(privateKey, provider);

// Connecting to smart contract
const contract = new Contract(contractAddress, SWAP_ABI, provider);

const wbnbAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
const cakeAddress = "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82";

const main = async () => {
  // Before transfer
  console.log("==Initial==");
  console.log({
    accountBalance: formatEther(await provider.getBalance(account)),
  });

  const contractWithWallet = contract.connect(wallet);

  const amountOutMin = parseEther("17"); // fill in the minimum amount of tokens you want to receive
  const path = [wbnbAddress, cakeAddress];
  const to = account;
  const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // deadline is 10 minutes from now

  const tx = await (contractWithWallet as Contract).swapExactETHForTokens(
    amountOutMin,
    path,
    to,
    deadline,
    {
      value: parseEther("1"), // the amount of ether you want to swap
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
    accountBalance: formatEther(await provider.getBalance(account)),
  });
};

main();
