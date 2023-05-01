# **`ethersjs-examples`**

## **Description 🚀**

**`ethersjs-examples`** is a collection of simple examples demonstrating various concepts of the **[ethers.js](https://github.com/ethers-io/ethers.js/)** library. This project is my journey of learning web3 developement specifically ethersjs library. I truly hope you find these examples helpful, and that they inspire you to dive deeper into the world of Ethereum and blockchain development!

While most examples are tailored for the Binance Smart Chain (BSC), they can also be used for Ethereum, as it is the foundation of the tools used. Simply change the network and contract addresses accordingly.

## **Tools Used 🛠️**

- **[Node.js](https://nodejs.org/)**: A JavaScript runtime environment.
- **[TypeScript](https://www.typescriptlang.org/)**: A strongly-typed superset of JavaScript that compiles to plain JavaScript.
- **[ethers.js](https://github.com/ethers-io/ethers.js/)**: A complete Ethereum wallet implementation and utilities library.
- **[anvill](https://book.getfoundry.sh/reference/anvil)**: A tools to create a local testnet node for deploying and testing smart contracts. It can also be used to fork other EVM compatible networks.

## **Example Descriptions 📚**

1. **01-interact-with-accounts.ts**: Demonstrates how to connect with Node and read account balance using ethers.js 
2. **02-read-smart-contract.ts**: Shows how to read data from a smart contract deployed on the Ethereum blockchain using ethers.js.
3. **03-send-signed-transaction.ts**: Teaches how to send signed transactions, such as transferring Ether between accounts, using ethers.js.
4. **04-write-smart-contract.ts**: Illustrates how to write data to a smart contract deployed on the Ethereum blockchain using ethers.js.
5. **05-read-contract-events-log.ts**: Explains how to read contract events logs, which are emitted by smart contracts during their execution, using ethers.js.
6. **06-inspecting-blocks.ts**: Provides an example of how to inspect Ethereum blocks and retrieve block information using ethers.js.
7. **99-pancakeswap-router.ts**: A more complex example demonstrating how to interact with the PancakeSwap Router smart contract, which is a popular decentralized exchange on the Binance Smart Chain, using ethers.js.

## **Getting Started 🏁**

1. Clone this repository to your local machine.
2. Run **`npm install`** to install the necessary dependencies.
3. Start your local test node or connect with blockchain provider
4. Execute any example by running **`npx ts-node src/<example-file>.ts`**, replacing **`<example-file>`** with the desired example file name.

Note: You may need to provide your own Ethereum private key or mnemonic for certain examples that require account access. Make sure not to share or expose your private key or mnemonic to anyone.
