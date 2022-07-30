import React, { memo } from "react";
import styled, { ITheme } from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
  <LoadingOutlined className="pin-icon" style={{ fontSize: 24 }} spin />
);

const Button = styled.button`
  :disabled {
    opacity: 0.5;
    :hover {
      cursor: pointer;
      transform: scale(1);
    }
  }
  .pin {
    margin-left: 20px;
  }
  .pin-icon {
    color: ${({ theme }: { theme: ITheme }) => theme.white};
  }
`;

interface IBTNProps {
  title: string;
  onClick: () => void;
  className?: string;
  loading?: boolean;
}

const BTNPrimary = (
  props: IBTNProps & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { title, onClick, loading, className, ...rest } = props;
  return (
    <Button
      className={`btn-primary fw-bold ${className}`}
      onClick={onClick}
      {...rest}
    >
      {title}
      {!!loading && <Spin className="pin" indicator={antIcon} />}
    </Button>
  );
};

export default memo(BTNPrimary);
