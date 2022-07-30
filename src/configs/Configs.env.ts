import isEmpty from "lodash/isEmpty";
import Web3 from "web3";

declare global {
  interface Window {
    token: string;
    ethereum: any;
    solana: any;
    web3: Web3;
  }
}

interface IENVS {
  FAST_REFRESH: boolean;
  REACT_APP_BASE_API: string;
  REACT_APP_BASE_CHAIN_ID: string;
}

const defaultEnvs = {
  FAST_REFRESH: true,
  REACT_APP_BASE_API: "",
  REACT_APP_BASE_CHAIN_ID: "56",
};

export const getEnvs = () => {
  let envs: any = {};
  try {
    const PROCCESS_ENV = process.env;
    if (!isEmpty(PROCCESS_ENV)) {
      Object.keys(PROCCESS_ENV).forEach((key: string) => {
        const value = PROCCESS_ENV[key];
        if (value === "true" || value === "false") {
          envs[key] = value === "true";
        } else {
          envs[key] = PROCCESS_ENV[key];
        }
        return key;
      });
    }
  } catch (error) {
    console.debug(error);
  } finally {
    envs = isEmpty(envs) ? defaultEnvs : envs;
  }
  return { ...envs };
};

export const ENVS: IENVS = getEnvs();
