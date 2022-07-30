import React from "react";
import { Wrapper } from "./Navbar.styled";
import { onMoveAnimation } from "src/services/useDevelopUI";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-bar" id="nav-bar-id">
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
                src={require("../../assets/header/Group 4813020.png").default}
                alt=""
                onClick={() => {
                  onMoveAnimation("nav-bar-id", "moveOutOpacity");
                }}
              />
            </div>
          </div>
        </div>
        <div className="container navlist">
          <div className="nav-link">Inventory</div>
          <div className="nav-link">Inventory</div>
          <div className="nav-link">Inventory</div>
          <div className="nav-link">Inventory</div>
          <div className="nav-link">Inventory</div>
          <div className="nav-link">Inventory</div>
          <div className="nav-link">Inventory</div>
          <div className="nav-link">Inventory</div>
          <div className="nav-link">Inventory</div>
          <div className="nav-link">Inventory</div>
          <div className="nav-link">Inventory</div>
          <div className="nav-link">Inventory</div>
        </div>
        <div className="nav-media container">
          <div>
            <img
              src={
                require("../../assets/navbar/Facebook - Negative.png").default
              }
              alt=""
            />
            <img
              src={
                require("../../assets/navbar/Twitter - Negative.png").default
              }
              alt=""
            />
            <img
              src={require("../../assets/navbar/Subtract.png").default}
              alt=""
            />
            <img
              src={require("../../assets/navbar/Vector (1).png").default}
              alt=""
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
