# Cronos Wallet Connections

## Overview

This is a boilerplate project using NextJS13 to demonstrate Web3 wallet connection on Cronos and basic interaction with the Cronos blockchain.

Requirement: Node 18+

## Project creation

This project was created with `npx create-next-app@latest` and it is based on [this tutorial](https://abhik.hashnode.dev/series/nextxweb3).

Project creation:

-   Use Typescript with NextJS 13 app.
-   Use ESLint.
-   Use Tailwind CSS in our Next app.
-   We will not be using the src directory
-   We will definitely use the App Router with NextJS 13
-   Change the import alias to @

Configure port in `package.json`:

```json
{
    "scripts": {
        "dev": "next dev -p 3000"
    }
}
```

Then, install and configure:

-   [Chakra UI](https://chakra-ui.com/getting-started/nextjs-guide)
-   [Zustand for state management](https://github.com/pmndrs/zustand)
-   [Ethers.js] (https://docs.ethers.org/)
-   [Web3 Wallet](https://web3-wallet.github.io/web3-wallet/docs/getting-started)

Then, create or update the /app directory.

## Env variables

See .env.example

## To launch the project locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To use from another device with ngrok (installed with Homebrew):

```bash
ngrok http --domain=domain-name.app 3000
```

## How to connect to Web3 wallet and Cronos blockchain

The Cronos blockchain is supported by Crypto.com DeFi Wallet, Rabby, MetaMask, Trust Wallet and a number of other wallets such as those listed [here](https://web3-wallet.github.io/web3-wallet/wallets/metamask).

In order to facilitate the use of these wallets by Cronos dapp developers, we recommend the use of [Web3-Wallet](https://web3-wallet.github.io/web3-wallet/docs/getting-started), a npm library used by several major Cronos dapps.

This repository uses Cronos mainnet, and demonstrates the use of Web3-Wallet with a NextJS 13 application:

-   The `./app/chains.ts` and `./app/wallets.ts` serve as configuration files
-   If you need to read data from the blockchain, you also need to enter a blockchain URL which is going to support your rate of requests in the .env file, under `NEXT_PUBLIC_BLOCKCHAIN_URL`.
-   The `./app/components/Navbar` demonstrates how the app manages the user's connection to their preferred wallet using a basic Modal interface (in this example, Crypto.com DeFi Wallet, Rabby / MetaMask, Trust Wallet, and Wallet Connect).
-   The `./app/components/ReadChain` demonstrates how to read information from the Cronos blockchain, such as the latest block number and the crypto asset balance of a user.
-   The `./app/components/WriteChain` demonstrates how to send a transaction to the Cronos blockchain.

## Work in process

The `./app/api` and `./app/protected` routes are unused at the moment, could be used in a future version of this repository which demonstrates login via message signing.
