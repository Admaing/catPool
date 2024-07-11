# FROGVERSE - Universe of Frogs
![Screenshot 2024-06-29 204944](https://github.com/bitcryptodev/Frogverse/assets/174127591/43ce20bc-8a01-4f79-a290-24bc0069c5f2)

You own a pond where you can take care and nourish cute little tadpoles into frogs 🐸

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, and Typescript.

## Quickstart

To get started, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/bitcryptodev/Frogverse
cd Frogverse
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. Final you can get this amazing Frogverse on your screen: 
![Screenshot 2024-06-28 143214](https://github.com/bitcryptodev/Frogverse/assets/174127591/a721b0e4-a270-4e63-bb5d-4ac3ee8e0475)

