import styled from "styled-components";

export const Wrapper = styled.div`
  .nav-bar {
    background: rgba(0, 0, 0, 0.3);
    /* Blur BG 100% */
    backdrop-filter: blur(100px);
    color: #e7e1d9;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    -moz-user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .app-header {
      width: 100%;
      padding-top: 16px;
      padding-bottom: 16px;
      background: rgba(11, 12, 14, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .icon-rights {
          width: 33%;
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          align-items: center;
          > img {
            width: 40px;
            cursor: pointer;
          }
          .btn-rights {
            cursor: pointer;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 14px 20px;
            gap: 10px;

            width: 156px;
            height: 53px;

            /* Gray/15 */

            background: rgba(155, 165, 177, 0.15);
            border-radius: 60px;
            font-family: "Clash Display";
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            /* identical to box height */

            text-align: center;

            /* White/ 1 */

            color: #ffffff;
          }
        }
        .btn-center {
          cursor: pointer;
          font-family: "Clash Display";
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 25px;
          /* identical to box height */

          text-align: center;
          text-decoration-line: underline;

          color: #ffffff;
        }
        .icon-lefts {
          width: 33%;
          > img {
            width: 47.58px;
          }
        }
      }
    }
    /* > div {
      width: 100%;
    } */
    > .navlist {
      z-index: 1;
      /* width: 100%; */
      margin-top: 106px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      > .nav-link {
        cursor: pointer;
        transition: 0.3s;
        font-family: "Clash Display";
        font-style: normal;
        font-weight: 600;
        font-size: 96px;
        line-height: 118px;
        /* identical to box height */

        text-align: center;
        text-transform: capitalize;

        /* White/ 1 */

        color: #ffffff;

        mix-blend-mode: normal;
        &:hover {
          background: linear-gradient(99.9deg, #3b67ff 3.81%, #c273f2 46.18%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      }
    }
    > .nav-media {
      z-index: 0;
      width: 100%;
      position: absolute;
      height: 120px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      > div {
        display: flex;
        gap: 10px;
        align-items: center;
        > img {
          width: 24px;
          cursor: pointer;
          z-index: 3;
        }
      }
    }
  }
`;
