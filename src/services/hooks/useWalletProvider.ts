import React from "react";
import { cloneDeep } from "lodash";
import { useWallet } from "use-wallet";
import { SUPPORTED_NETWORKS } from "src/configs/Connect/Configs.networks";
import { ChainId } from "src/configs/Connect/Configs.chainId";
import { ENVS } from "src/configs/Configs.env";
import { toast } from "react-toastify";
import { onMoveAnimation } from "./useDevelopUI";
import { useQuery } from "react-query";
import { getWeb3 } from "../utils/getWeb3";

export const useConnectWallet = () => {
  const wallet = useWallet();
  return async (walletName: string) => {
    try {
      await wallet.connect(walletName);
    } catch (err: any) {
      toast.error(err.message);
    }
  };
};
export const useGetBalance = () => {
  const wallet = useWallet();
  const web3 = getWeb3(wallet.ethereum);
  return useQuery(
    ["useGetBalance.name"],
    async () => {
      const balance = await wallet?.balance;
      return web3.utils.fromWei(web3.utils.toBN(parseInt(balance)));
    },
    {
      refetchInterval: 1000,
    }
  );
};
export const useChangeChain = () => {
  const wallet = useWallet();
  return (chainNum: any) => {
    if (ChainId.MAINNET === chainNum) {
      try {
        wallet.ethereum?.send("wallet_switchEthereumChain", [
          { chainId: "0x1" },
          wallet.account,
        ]);
      } catch (err: any) {
        toast.error(err?.message);
      }
    } else if (ChainId.ROPSTEN === chainNum) {
      try {
        wallet.ethereum?.send("wallet_switchEthereumChain", [
          { chainId: "0x3" },
          wallet.account,
        ]);
      } catch (err: any) {
        toast.error(err?.message);
      }
    } else {
      const params = cloneDeep(
        SUPPORTED_NETWORKS[
          chainNum || parseInt(ENVS.REACT_APP_BASE_CHAIN_ID.toString())
        ]
      );
      delete params.chainNumb;
      delete params.path;
      delete params.pathDisable;
      try {
        wallet.ethereum?.send("wallet_addEthereumChain", [
          params,
          wallet.account,
        ]);
      } catch (err: any) {
        toast.error(err?.message);
      }
    }
  };
};

export const useListenWallet = () => {
  const wallet = useWallet();
  const onChangeChain = useChangeChain();
  React.useEffect(() => {
    if (wallet.status === "connected") {
      onMoveAnimation("connect-modal", "moveOutOpacity");
      if (wallet.chainId !== parseInt(ENVS.REACT_APP_BASE_CHAIN_ID)) {
        onChangeChain(parseInt(ENVS.REACT_APP_BASE_CHAIN_ID));
        toast.info("Please switch to bsc network");
      }
    } else if (wallet.status === "error") {
      if (wallet.error?.name === "ChainUnsupportedError") {
        onChangeChain(parseInt(ENVS.REACT_APP_BASE_CHAIN_ID));
      }
      toast.error(wallet.error?.message);
    } // eslint-disable-next-line
	}, [wallet.status, wallet.error?.name])
};

export const useCheckChainConnected = () => {
  const wallet = useWallet();
  const [isCompatible, setIsCompatible] = React.useState(false);
  React.useEffect(() => {
    if (wallet.status === "connected") {
      if (wallet.chainId === parseInt(ENVS.REACT_APP_BASE_CHAIN_ID)) {
        setIsCompatible(true);
      } else {
        setIsCompatible(false);
      }
    }
  }, [wallet.status, wallet.chainId]);
  return isCompatible;
};

export const useCheckChain = () => {
  const wallet = useWallet();
  return useQuery(
    ["useCheckChain.name"],
    () => {
      return {
        chainId: wallet.chainId,
        chainName: wallet.networkName,
      };
    },
    {
      enabled: !!wallet.account,
      refetchInterval: 1000,
    }
  );
};

export const useCheckConnected = () => {
  const [isConnected, setIsConnected] = React.useState(false);
  const wallet = useWallet();
  React.useEffect(() => {
    if (wallet.status === "connected") {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [wallet.status]);

  return isConnected;
};

export const useCheckAccountActive = () => {
  const wallet = useWallet();
  if (wallet?.account) return wallet.account;
  else return "";
};

export const useDisconnectWallet = () => {
  const wallet = useWallet();
  return () => {
    wallet.reset();
  };
};
