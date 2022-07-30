import React, { FunctionComponent } from "react";
import {
  useChangeChain,
  useConnectWallet,
  useCheckAccountActive,
  useCheckChain,
} from "src/services/hooks/useWalletProvider";

const withConnect = (WrappedComponent: FunctionComponent) => (props: any) => {
  const connect = useConnectWallet();
  const changeChain = useChangeChain();
  const account = useCheckAccountActive();
  const { data: chain } = useCheckChain();
  return (
    <WrappedComponent
      {...{
        ...props,
        connect,
        changeChain,
        account,
        chain,
      }}
    />
  );
};

export default withConnect;
