import React from "react";
import styled, { ITheme } from "styled-components";

const Button = styled.div<any>`
  background: ${({ bgId }) =>
    bgId === 0
      ? "linear-gradient(241.68deg, #21BBEB 17.65%, #97F38E 82.63%)"
      : "linear-gradient(241.68deg, #0139FF 17.65%, #FF7680 82.63%)"};
  padding: 12px 16px;
  width: fit-content;
  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 30px;

  span {
    color: ${({ bgId }) => (bgId === 0 ? "black" : "white")};
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
        font-size: 14px;
        img {
            width: 20px;
            height: 20px;
            margin-right: 12px;
        }
    `}
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToExtraSmall`
        padding: 10px 0px;
        
        display:flex;
        flex-direcition:row;
        align-items:center;
        justify-content:center;
        width:100%;
        
    `}
`;

type IButtonGradientProps = {
  icon: string;
  text: string;
  bgId: number;
  clickHandle: () => void;
};

export const ButtonGradient = ({
  icon,
  text,
  bgId,
  clickHandle,
}: IButtonGradientProps) => {
  return (
    <Button onClick={() => clickHandle()} bgId={bgId}>
      {icon ? <img src={icon} alt="Icon" /> : null}
      <span>{text}</span>
    </Button>
  );
};
