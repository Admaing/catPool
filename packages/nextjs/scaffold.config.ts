import * as chains from "wagmi/chains";
import { defineChain } from "viem";

export type ScaffoldConfig = {
  targetNetwork: chains.Chain;
  pollingInterval: number;
  alchemyApiKey: string;
  walletConnectProjectId: string;
  burnerWallet: {
    enabled: boolean;
    onlyLocal: boolean;
  };
  walletAutoConnect: boolean;
};

const linea_sepolia = defineChain({
  id: 59141,
  name: "Linea Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia.linea.build"],
      webSocket: ["wss://rpc.sepolia.linea.build"],
    },
    public: {
      http: ["https://rpc.sepolia.linea.build"],
      webSocket: ["wss://rpc.sepolia.linea.build"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://sepolia.lineascan.build/" },
  },
  network: "Linea Sepolia",
});
// 定义 Hardhat 本地网络
const hardhatLocal = defineChain({
  id: 31337,
  name: "Hardhat Local",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"],
    },
    public: {
      http: ["http://127.0.0.1:8545"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "" }, // 本地网络通常没有区块浏览器
  },
  network: "Hardhat Local",
});

const scaffoldConfig = {
  // The network where your DApp lives in
  targetNetwork: hardhatLocal,

  // The interval at which your front-end polls the RPC servers for new data
  // it has no effect on the local network
  pollingInterval: 30000,

  // This is ours Alchemy's default API key.
  // You can get your own at https://dashboard.alchemyapi.io
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF",

  // This is ours WalletConnect's default project ID.
  // You can get your own at https://cloud.walletconnect.com
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",

  // Burner Wallet configuration
  burnerWallet: {
    // Set it to false to completely remove burner wallet from all networks
    enabled: true,
    // Only show the Burner Wallet when running on hardhat network
    onlyLocal: true,
  },

  /**
   * Auto connect:
   * 1. If the user was connected into a wallet before, on page reload reconnect automatically
   * 2. If user is not connected to any wallet:  On reload, connect to burner wallet if burnerWallet.enabled is true && burnerWallet.onlyLocal is false
   */
  walletAutoConnect: true,
} satisfies ScaffoldConfig;

export default scaffoldConfig;
