import React, { useMemo } from "react";
import {
  ITheme,
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css,
} from "styled-components";
import { useSelector } from "react-redux";
import { Colors } from "./Theme.styled";
import { FONTS } from "./Theme.fonts";
import { darkModeSelector } from "./Theme.selector";

const MEDIA_WIDTHS = {
  // upToExtraSmall: 500,
  // upToSmall: 720,
  // upToMedium: 1024,
  // upToLarge: 1480,
  upToExtraSmall: 640,
  upToSmall: 768,
  upToMedium: 1056,
  upToLarge: 1280,
};

const mediaWidthTemplates: {
  [width in keyof typeof MEDIA_WIDTHS]: typeof css;
} = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  (accumulator as any)[size] = (a: any, b: any, c: any) => css`
    @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
      ${css(a, b, c)}
    }
  `;
  return accumulator;
}, {}) as any;

const white = "#FFFFFF";
const black = "#000000";

export function colors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    // table
    headerRow: darkMode ? "#f5f5f5" : "#f5f5f5",
    hoverRow: darkMode ? "#e0e0e0" : "#e0e0e0",
    darkRow: darkMode ? "#F5F5F5" : "#F5F5F5",
    lightRow: darkMode ? white : white,

    // modal
    modalBg: darkMode ? "rgba(0,0,0,.425)" : "rgba(0,0,0,0.3)",

    border1: darkMode ? "#3f3f3f" : "#353945",
    border2: darkMode ? "#E0E0E0" : "#E0E0E0",

    // text
    text1: darkMode ? white : black,
    text2: darkMode ? "rgba(112, 112, 112, 1)" : "rgba(112, 112, 112, 1)",
    text3: darkMode ? "#37b9ff" : "#3772FF",
    text4: darkMode ? "#797979" : "#797979",
    text5: darkMode ? "#37B9FF" : "#37B9FF",
    text6: darkMode ? "#E6E8EC" : "#E6E8EC",
    text7: darkMode ? "#FCFCFD" : "#FCFCFD",
    text8: darkMode ? black : white,
    text9: darkMode ? "#45B36B" : "#45B36B",

    green1: darkMode ? "rgba(49, 217, 46, 1)" : "rgba(49, 217, 46, 1)",
    green2: darkMode ? "#45B26B" : "#45B26B",
    red1: darkMode ? "#EF466F" : "#EF466F",

    yellow1: darkMode ? "#FFD166" : "#FFD166",
    yellow2: darkMode ? "#FF8A00" : "#FF8A00",

    tooltipBg: black,
    tooltipText: white,

    gray1: darkMode ? "#D8D8D8" : "#D8D8D8",
    gray2: darkMode ? "#D6D8E0" : "#D6D8E0",
    gray3: darkMode ? "#D1D1D1" : "#D1D1D1",

    dark1: darkMode ? "#232630" : "#232630",
    dark2: darkMode ? "#353945" : "#353945",
    dark3: darkMode ? "#777E90" : "#777E90",
    dark4: darkMode ? "#B1B5C3" : "#B1B5C3",
    dark5: darkMode ? "#232323" : "#232323",
    dark6: darkMode ? "#777E91" : "#777E91",
    dark7: darkMode ? "#23262F" : "#23262F",
    dark8: darkMode ? "#141416" : "#141416",
    dark9: darkMode ? "#202231" : "#202231",

    blue1: darkMode ? "#3772ff" : "#3772ff",
    blue2: darkMode ? "#8084dc" : "#8084dc",
    blue3: darkMode ? "rgba(98, 216, 238, 1)" : "rgba(98, 216, 238, 1)",
    blue4: darkMode ? "#15B2F4" : "#15B2F4",
  };
}

export function appTheme(darkMode: boolean): ITheme {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
  };
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const darkMode = useSelector(darkModeSelector);

  const themeObject = useMemo(() => appTheme(darkMode), [darkMode]);

  return (
    <StyledComponentsThemeProvider theme={themeObject}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export const FixedGlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
    }
    ::-webkit-scrollbar {
        width: 7px;
        background: #000;
    }

    ::-webkit-scrollbar-thumb {
        // background: #393812;
        background: linear-gradient(238.93deg, #90caffd6 18.8%, #07ff889e 81.2%);
        -webkit-border-radius: 1ex;
        -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
    }

    ::-webkit-scrollbar-corner {
        background: #000;
    }
    .ant-modal-close-x {
        display: none;
    }

    .ant-modal-body {
        padding: 0;
    }

    .ant-modal-content {
        background-color: transparent;
    }

    a {
        color: ${colors(false).black};
    }

    .modified-item:hover {
        border-bottom: 2px solid transparent !important;
        color: inherit !important;
    }

    * {
        box-sizing: border-box;
    }

    button {
        user-select: none;
    }
    .container {
        max-width: 1660px !important;
        padding: 0 16px !important;

    }

    html {
        font-size: 16px;
        font-variant: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
    }
    p {
        margin-bottom: 0;
    }
`;

export const ThemedGlobalStyle = createGlobalStyle`
    body {
        min-height: 100vh;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 1);
        // background-image: url(./bg.svg);
    }

    * {
        box-sizing: border-box;
        font-family: 'Work Sans';
    }
    .font-lexend {
        font-family: 'Lexend';
    }
    .btn-primary {
        transition: .2s ease-in-out 0s;
        border-radius: 90px;
        height: 40px;
        color: #FFFFFF;
        background: linear-gradient(99.9deg, #3B67FF 3.81%, #C273F2 46.18%);
    }

    .btn-primary:hover {
        cursor: pointer;
        background: linear-gradient(90deg, rgba(34, 30, 231, 0.66) 0%, #C273F2 100%);
/* Hover style */
        box-shadow: 0px 4px 8px rgba(11, 12, 14, 0.1);
    }

    .btn-primary:active {
        background: linear-gradient(99.9deg, #3B67FF 3.81%, #C273F2 46.18%);
        cursor: pointer;
    }
    .btn-primary:focus{
        background: linear-gradient(90deg, rgba(34, 30, 231, 0.66) 0%, #C273F2 100%);
        opacity: 0.5;
    }
    .btn-primary.btn-disable{
        background: linear-gradient(99.9deg, #3B67FF 3.81%, #C273F2 46.18%);
        opacity: 0.35;
    }
    .btn-text{
        color: ${({ theme }: { theme: ITheme }) => theme.white};
                        margin-left: 14px;
                        backdrop-filter: blur(16px);
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 16px;
                        padding: 16px;
                        background: #000000;
                        box-sizing:border-box ;
                        box-shadow: 0px 0px 0px #ffffff;
                        border-radius: 60px;
                        letter-spacing: -0.125px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-size: 0 0;
                        position: relative;
                        transition: 0.3s;
                        cursor: pointer;
                        &::before {
                            transition: 0.3s;
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            border-radius: 60px;
                            padding: 1px;
                            background: linear-gradient(45deg, #3B67FF 0%, #C273F2 100%);
                            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                            -webkit-mask-composite: xor;
                            mask-composite: exclude;
                        }
                        &:hover::before {
                            background: linear-gradient(45deg, #221EE7 0%, #C273F2 100%);
                        }
                        &:focus::before {
                          
                          opacity: 0.5;
                      
                          background: linear-gradient(45deg, #221EE7 0%, #C273F2 100%);
                      }

    }
    .btn-text.btn-disable{
        opacity: 0.35;
    }
    .btn-text2{
        color: ${({ theme }: { theme: ITheme }) => theme.white};
                        margin-left: 14px;
                        backdrop-filter: blur(16px);
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 16px;
                        padding: 16px;
                        background: #000000;
                        box-sizing:border-box ;
                        box-shadow: 0px 0px 0px #ffffff;
                        border-radius: 60px;
                        letter-spacing: -0.125px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-size: 0 0;
                        position: relative;
                        transition: 0.3s;
                        cursor: pointer;
                        &::before {
                            transition: 0.3s;
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            border-radius: 60px;
                            padding: 1px;
                            background: linear-gradient(45deg, #6166FB 0%, #7FDDDD 100%);
                            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                            -webkit-mask-composite: xor;
                            mask-composite: exclude;
                        }
                        &:hover::before {
                            background: linear-gradient(45deg, #3C24CB 0%, #7FDDDD 100%);
                        }
                        &:focus::before {
                          
                          opacity: 0.5;
                      
                          background: linear-gradient(45deg, #3C24CB 0%, #7FDDDD 100%);
                      }

    }
    .btn-text2.btn-disable{
        opacity: 0.35;
    }

    .btn-secondary {
        transition: .2s ease-in-out 0s;
        border-radius: 90px;
        height: 40px;
        color: #FFFFFF;
        background: linear-gradient(90deg, #3444DA 0%, #7FDDDD 100%);
    }

    .btn-secondary:hover {
        cursor: pointer;
        background: linear-gradient(90deg, #3C24CB 0%, #7FDDDD 123.68%);
/* Hover style */
        box-shadow: 0px 4px 8px rgba(11, 12, 14, 0.1);
    }

    .btn-secondary:active {
        background: linear-gradient(90deg, #3444DA 0%, #7FDDDD 100%);
        cursor: pointer;
    }
    .btn-secondary:focus{
        background: linear-gradient(90deg, #3C24CB 0%, #7FDDDD 123.68%);
        opacity: 0.5;
    }
    .btn-secondary.btn-disable{
        background: linear-gradient(90deg, #3444DA 0%, #7FDDDD 100%);
        opacity: 0.35;
    }

    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        .btn-primary {
            height: 40px;
        }
        .container {
            max-width: 100% !important;
            padding: 0 30px !important;
        }
    `}

    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToExtraSmall`
        .container {
            padding: 0 15px !important;
        }
    `}

    .fw-regular {
        font-weight: 400;
        font-family: 'Lexend';
    }

    .fw-medium {
        font-weight: 500;
        font-family: 'Lexend';
    }

    .fw-light {
        font-weight: 300;
        font-family: 'Lexend';
    }

    .fw-suppermedium {
        font-weight: 600;
        font-family: 'Work Sans';
    }

    .fw-bold {
        font-weight: 700;
        font-family: 'Work Sans';
    }

    .fs-suppersmal {
        font-size: ${FONTS.SIZE.superSmall}px;
        line-height: ${FONTS.SIZE.superSmall + 7}px;
    }

    .fs-small {
        font-size: ${FONTS.SIZE.small}px;
        line-height: ${FONTS.SIZE.small + 7}px;
    }

    .fs-regular {
        font-size: ${FONTS.SIZE.regular}px;
        line-height: ${FONTS.SIZE.regular + 7}px;
    }

    .fs-medium {
        font-size: ${FONTS.SIZE.medium}px;
        line-height: ${FONTS.SIZE.medium + 7}px;
    }

    .fs-supermedium {
        font-size: ${FONTS.SIZE.superMedium}px;
        line-height: ${FONTS.SIZE.superMedium + 7}px;
    }

    .fs-large {
        font-size: ${FONTS.SIZE.large}px;
        line-height: ${FONTS.SIZE.large + 7}px;
    }

    .fs-avglarge {
        font-size: ${FONTS.SIZE.avgLarge}px;
        line-height: ${FONTS.SIZE.avgLarge + 7}px;
    }

    .fs-verylarge {
        font-size: ${FONTS.SIZE.veryLarge}px;
        line-height: ${FONTS.SIZE.veryLarge + 7}px;
    }

    .fs-superlarge {
        font-size: ${FONTS.SIZE.superLarge}px;
        line-height: ${FONTS.SIZE.superLarge + 7}px;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    .disable-pointer {
        cursor: default;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .gradient-text {
        background: -webkit-linear-gradient(-75deg, #15b2f4 0%, #9546c2 50%, #fd7942 75%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &::selection {
            -webkit-text-fill-color: white;
        }
    }
    .items-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .justify-between {
        display: flex;
        justify-content: space-between;
    }
    .btn-border {
        border: 2px solid ${({ theme }: { theme: ITheme }) => theme.dark3};
        font-size: 12px !important;
        background: transparent !important;
    }
    .btn-connect-wallet {
        border: 1px solid ${({ theme }: { theme: ITheme }) => theme.border1};
        .balanceText {
            width: max-content;
        }
    }
    .text-center {
        text-align: center;
    }
    .default-text {
        color: ${({ theme }: { theme: ITheme }) => theme.text8};
    }
    .line-full-width {
        width: 100%;
        height: 1px;
        background: ${({ theme }: { theme: ITheme }) => theme.border1};
    }
    .btn-disconnect {
        color: ${({ theme }: { theme: ITheme }) => theme.text8};
    }

    .modal-collection-drops {
        .ant-modal-footer {
            display: none;
        }
        .ant-modal-header {
            // border-top-left-radius: 5px;
            // border-top-right-radius: 5px;
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(20px);
            border-bottom: none;
            padding: 7px 15px;
        }
        .ant-modal-body {
            .ant-image {
                width: 100%;
                backdrop-filter: blur(20px);
                background: rgba(0,0,0,0.8);
            }
        }
    }
`;
