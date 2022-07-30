import React from "react";
import { Wrapper } from "./CustomHeader.styled";
import { onMoveAnimation } from "src/services/useDevelopUI";

const CustomHeader = () => {
  return (
    <Wrapper>
      <div className="app-header">
        <div className="container">
          <div className="icon-lefts">
            <img
              src={require("../../assets/header/homewave.png").default}
              alt=""
            />
          </div>
          <div className="btn-center">TuniPass Minting now live</div>
          <div className="icon-rights">
            <div className="btn-rights">Join us now</div>

            <img
              src={require("../../assets/header/Group 481302.png").default}
              alt=""
              onClick={() => {
                onMoveAnimation("nav-bar-id", "moveInOpacity");
              }}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CustomHeader;
