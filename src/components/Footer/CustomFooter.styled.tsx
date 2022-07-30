import styled, { ITheme } from "styled-components";
export const Wrapper = styled.div`
  .app-footer {
    padding-top: 68px;
    padding-bottom: 68px;
    width: 100%;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1)
      ),
      url(.png), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #3d3aee 100.02%);
    background-blend-mode: overlay, normal, normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    .container {
      > div {
        width: 25%;
      }
      width: 100%;
      display: flex;
      gap: 128px;
      .allrights {
        margin-top: 38px;
        font-family: "Clash Display";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height */

        color: #ffffff;
      }
      .media {
        .media-link {
          margin-top: 38px;
          display: flex;
          align-items: center;
          gap: 20px;
          > img {
            width: 48px;
          }
          padding: 19px 0px;
          border-bottom: solid 1px #ffffff;
          > span {
            font-family: "Clash Display";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;

            color: #ffffff;
          }
        }
        .social {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 35px;
          > img {
            width: 24px;
          }
        }
        > span {
          font-family: "Clash Display";
          font-style: normal;
          font-weight: 700;
          font-size: 10px;
          line-height: 22px;
          /* identical to box height, or 220% */

          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: #ffffff;
        }
      }
      .platform,
      .global {
        display: flex;
        flex-direction: column;
        gap: 16px;
        > span {
          font-family: "Clash Display";
          font-style: normal;
          font-weight: 700;
          font-size: 10px;
          line-height: 22px;
          /* identical to box height, or 220% */

          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: #ffffff;
        }
        > div {
          display: flex;
          flex-direction: column;
          gap: 12px;
          > div {
            cursor: pointer;
            display: flex;
            width: fit-content;
            font-family: "Clash Display";
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 22px;
            /* identical to box height, or 92% */

            color: #ffffff;
            &.soon {
              position: relative;
              &::after {
                content: "Soon";
                position: absolute;
                top: -3px;
                right: -5px;
                transform: translateX(100%);
                font-family: "Clash Display";
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 22px;
                /* identical to box height, or 157% */

                /* Gradient/Pink verticle */

                background: linear-gradient(180deg, #3b67ff 0%, #c273f2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
              }
            }
          }
        }
      }
      .introduction {
        > span {
          margin-top: 42px;
          margin-bottom: 56px;
          margin-left: 79px;
          font-family: "Poppins";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          /* or 138% */

          color: #ffffff;
        }
        display: flex;
        flex-direction: column;
        > div {
          display: flex;
          align-items: center;
          &.intro-tops {
            gap: 30px;
            > img {
              width: 49px;
            }
            > div {
              font-family: "Clash Display";
              font-style: normal;
              font-weight: 600;
              font-size: 100px;
              line-height: 123px;
              /* identical to box height */

              text-align: center;

              color: #ffffff;
            }
          }
          &.intro-bots {
            margin-left: 79px;
            gap: 16px;
            .btn-left,
            .btn-right {
              display: flex;
              flex-direction: row;
              align-items: center;
              padding: 10px 16px;
              gap: 20px;
              font-family: "Clash Display";
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 22px;
              text-align: center;

              color: #ffffff;
              padding: 16px;
              background: #000000;
              box-sizing: border-box;
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
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: 60px;
                padding: 1px;
                background: linear-gradient(45deg, #3b67ff 0%, #c273f2 100%);
                -webkit-mask: linear-gradient(#fff 0 0) content-box,
                  linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                box-shadow: 0px 4px 8px rgba(11, 12, 14, 0.1);
              }

              &:hover::before {
                background: linear-gradient(45deg, #221ee7 0%, #c273f2 100%);
              }
              &:focus::before {
                opacity: 0.5;

                background: linear-gradient(45deg, #221ee7 0%, #c273f2 100%);
              }

              img {
                width: 24px;
                margin-right: 5px;
              }
              span {
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
`;
