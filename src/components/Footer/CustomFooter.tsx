import React from "react";
import { Wrapper } from "./CustomFooter.styled";
import { onMoveAnimation } from "src/services/useDevelopUI";

const CustomFooter = () => {
  return (
    <Wrapper>
      <div className="app-footer">
        <div className="container">
          <div className="introduction">
            <div className="intro-tops">
              <img
                src={require("../../assets/header/homewave.png").default}
                alt=""
              />
              <div>Tuniver</div>
            </div>
            <span>
              Tuniver is a Web3 music-centric platform that empowers users to
              support their favorite artists and earn exclusive returns.
            </span>
            <div className="intro-bots">
              <div className="btn-left">
                <span>English</span>
                <div>
                  <img
                    src={require("../../assets/tunipass/arrowDown.png").default}
                    alt=""
                  />
                </div>
              </div>
              <div className="btn-right">
                <span>USDT</span>
                <div>
                  <img
                    src={require("../../assets/tunipass/arrowDown.png").default}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="platform">
            <span>PLATFORM</span>
            <div>
              <div>Application</div>
              <div>Website ver 1.0</div>
              <div className="soon">Marketplace</div>
              <div>Leaderboards</div>
              <div>News</div>
              <div></div>
            </div>
          </div>
          <div className="global">
            <span>GLOBAL</span>
            <div>
              <div>About us</div>
              <div>TuniBox</div>
              <div>How to play</div>
              <div>TuniWiki</div>
              <div>Term of Service</div>
              <div>Contact</div>
            </div>
          </div>
          <div className="media">
            <span>FOLLOW US</span>
            <div className="social">
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
            <div className="media-link">
              <span>support@tuniver.io</span>
              <img
                src={require("../../assets/footer/Arrow 1.png").default}
                alt=""
              />
            </div>
            <div className="allrights">
              © Tuniver2022, All Rights Reservered
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CustomFooter;
