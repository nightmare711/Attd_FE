import styled from "styled-components";

export const Wrapper = styled.div`
  .app-header {
    z-index: 5;
    position: fixed;
    left: 0px;
    top: 0px;
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
`;
