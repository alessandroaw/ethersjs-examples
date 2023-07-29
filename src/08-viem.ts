import { createPublicClient, createWalletClient, http } from "viem";
import { sepolia } from "viem/chains";

// Connecting to smart contract
// const signer = new Wallet(privateKey, provider);

const PROVIDER_URL = process.env.PROVIDER_URL || "";
const client = createPublicClient({
  chain: sepolia,
  transport: http(PROVIDER_URL),
});

const walletClient = createWalletClient({
  chain: sepolia,
  transport: http(PROVIDER_URL),
});

const main = async () => {
  const blockNumber = await client.getBlockNumber();
  console.log(`blockNumber: ${blockNumber}`);
};

main();
