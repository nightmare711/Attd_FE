import { ChainId } from "./Configs.chainId";

export interface INetworkProps {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls: string[];
}

export const SUPPORTED_NETWORKS = {
  [ChainId.MAINNET]: {
    chainId: "0x1",
    chainNumb: ChainId.MAINNET,
    chainName: "Ethereum",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.infura.io/v3"],
    blockExplorerUrls: ["https://etherscan.com"],
    path: "/ethereum.svg",
    pathDisable: "/ethereum-disable.svg",
  },
  [ChainId.FANTOM]: {
    chainId: "0xfa",
    chainNumb: ChainId.FANTOM,
    chainName: "Fantom",
    nativeCurrency: {
      name: "Fantom",
      symbol: "SOL",
      decimals: 18,
    },
    path: "/phantom.svg",
    rpcUrls: ["https://rpcapi.fantom.network"],
    blockExplorerUrls: ["https://ftmscan.com"],
  },
  [ChainId.BSC]: {
    chainId: "0x38",
    chainNumb: ChainId.BSC,
    chainName: "BSC",
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed.binance.org"],
    blockExplorerUrls: ["https://bscscan.com"],
    path: "/bsc.svg",
    pathDisable: "/bsc-disable.svg",
  },
  [ChainId.BSC_TESTNET]: {
    chainId: "0x61",
    chainName: "BSC Testnet",
    chainNumb: ChainId.BSC_TESTNET,
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
    path: "/bsc.svg",
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
    blockExplorerUrls: ["https://testnet.bscscan.com"],
    // chainNumb: ChainId.BSC_TESTNET,
  },
  [ChainId.MATIC]: {
    chainId: "0x89",
    chainName: "Matic",
    chainNumb: ChainId.MATIC,
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    path: "/polygon.svg",
    rpcUrls: ["https://rpc-mainnet.maticvigil.com"], // ['https://matic-mainnet.chainstacklabs.com/'],
    blockExplorerUrls: ["https://explorer-mainnet.maticvigil.com"],
  },
  [ChainId.HECO]: {
    chainId: "0x80",
    chainName: "Heco",
    nativeCurrency: {
      name: "Heco Token",
      symbol: "HT",
      decimals: 18,
    },
    rpcUrls: ["https://http-mainnet.hecochain.com"],
    blockExplorerUrls: ["https://hecoinfo.com"],
  },
  [ChainId.XDAI]: {
    chainId: "0x64",
    chainName: "xDai",
    nativeCurrency: {
      name: "xDai Token",
      symbol: "xDai",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.xdaichain.com"],
    blockExplorerUrls: ["https://blockscout.com/poa/xdai"],
  },
  [ChainId.HARMONY]: {
    chainId: "0x63564C40",
    chainName: "Harmony",
    nativeCurrency: {
      name: "One Token",
      symbol: "ONE",
      decimals: 18,
    },
    rpcUrls: [
      "https://api.harmony.one",
      "https://s1.api.harmony.one",
      "https://s2.api.harmony.one",
      "https://s3.api.harmony.one",
    ],
    blockExplorerUrls: ["https://explorer.harmony.one/"],
  },
  [ChainId.AVALANCHE]: {
    chainId: "0xA86A",
    chainName: "Avalanche",
    nativeCurrency: {
      name: "Avalanche Token",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://cchain.explorer.avax.network"],
  },
  [ChainId.OKEX]: {
    chainId: "0x42",
    chainName: "OKEx",
    nativeCurrency: {
      name: "OKEx Token",
      symbol: "OKT",
      decimals: 18,
    },
    rpcUrls: ["https://exchainrpc.okex.org"],
    blockExplorerUrls: ["https://www.oklink.com/okexchain"],
  },
  [ChainId.ARBITRUM]: {
    chainId: "0xA4B1",
    chainName: "Arbitrum",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://mainnet-arb-explorer.netlify.app"],
  },
  [ChainId.CELO]: {
    chainId: "0xA4EC",
    chainName: "Celo",
    nativeCurrency: {
      name: "Celo",
      symbol: "CELO",
      decimals: 18,
    },
    rpcUrls: ["https://forno.celo.org"],
    blockExplorerUrls: ["https://explorer.celo.org"],
  },
  [ChainId.PALM]: {
    chainId: "0x2A15C308D",
    chainName: "Palm",
    nativeCurrency: {
      name: "Palm",
      symbol: "PALM",
      decimals: 18,
    },
    rpcUrls: [
      "https://palm-mainnet.infura.io/v3/da5fbfafcca14b109e2665290681e267",
    ],
    blockExplorerUrls: ["https://explorer.palm.io"],
  },
  [ChainId.MOONRIVER]: {
    chainId: "0x505",
    chainName: "Moonriver",
    nativeCurrency: {
      name: "Moonriver",
      symbol: "MOVR",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.moonriver.moonbeam.network"],
    blockExplorerUrls: ["https://blockscout.moonriver.moonbeam.network"],
  },
};
