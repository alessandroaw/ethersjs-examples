import "dotenv/config";
import { Contract, JsonRpcProvider, Wallet } from "ethers";

// Use local test node Anvil forking BSC
const PROVIDER_URL = process.env.PROVIDER_URL;

// Connecting to provider
const provider = new JsonRpcProvider(PROVIDER_URL);
// const provider = new JsonRpcProvider();

// ABI short version
const CONTRACT_ABI = [
  "function name() view returns (string)",
  "function lastHarvest() view returns (uint256)",
  "function harvest()",
];

const mockPendleAddress = "0x316f2798c33424dCCC3B3300e7a650D5dcc2a026";
const mockRedactedAddress = "0xfF97FdCdBD7a824De84C8c8C9Cc0481A9c25c03F";

// Connecting to smart contract
const pk1 = process.env.ACCOUNT_PRIVATE_KEY || "";
const pk2 = process.env.ACCOUNT_PRIVATE_KEY_2 || "";
const signer_1 = new Wallet(pk1, provider);
const signer_2 = new Wallet(pk2, provider);

class Strategy {
  private contract: Contract;
  constructor(private address: string, private signer = signer_1) {
    this.contract = new Contract(address, CONTRACT_ABI, signer);
  }

  public async harvest() {
    const tx = await this.contract.harvest({ gasLimit: 100000 });
    console.log(`tx: ${tx.hash}`);
    const receipt = await tx.wait();
    console.log(`receipt: ${receipt.hash}`);
    console.log(`gas used: ${receipt.gasUsed.toString()}`);
  }

  public async lastHarvest() {
    const lastHarvest = await this.contract.lastHarvest();
    console.log(`lastHarvest: ${lastHarvest}`);
  }

  public async name() {
    const name = await this.contract.name();
    console.log(`name: ${name}`);
  }
}

const main = async () => {
  // Calling read method from the contract
  const strategies = [
    new Strategy(mockPendleAddress, signer_1),
    new Strategy(mockRedactedAddress, signer_2),
  ];
  await Promise.all(strategies.map((strategy) => strategy.name()));
  await Promise.all(strategies.map((strategy) => strategy.lastHarvest()));

  // for (const strategy of strategies) {
  //   // await strategy.harvest();
  //   strategy.harvest();
  // }

  await Promise.all(strategies.map((strategy) => strategy.lastHarvest()));
};

main();
