import React, { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { BiDownArrowAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./limitswap.css";
import { Link } from "react-router-dom";

function LimitSwap() {
  const [selectedLink, setSelectedLink] = useState(1);
    
  return (
    <>
    <div><Link to="/dex">Comming Soon ....<span style={{color:"lightblue"}}>Click here for Home</span></Link></div>
    <div style={{filter:"blur(4px)"}} className="limit-swap">
      <div className="simple-swap">
        <div className="top-menu">
          <div className="left">
            <a
              href="/dex"
              onClick={() => {
                setSelectedLink(0);
              }}
            >
              {" "}
              <p className={selectedLink === 0 ? "selected-link" : ""}>
                Swap
              </p>{" "}
            </a>
            <a
              href="/dex/limitswap"
              onClick={() => {
                setSelectedLink(1);
              }}
            >
              {" "}
              <p className={selectedLink === 1 ? "selected-link" : ""}>
                Limit
              </p>{" "}
            </a>
            <a
              href="/dex/p2pswap"
              onClick={() => {
                setSelectedLink(2);
              }}
            >
              <p className={selectedLink === 2 ? "selected-link" : ""}>P2P</p>
            </a>
          </div>
          <div className="right">
            <div className="btn add-btn">
              <RiAddFill size={24} color="white" />
            </div>
          </div>
        </div>

        <div className="swaping-input">
          <div className="swap-from">
            <div className="top">
              <p>You Sell</p>
              <p>
                Balance : <span className="balance">0</span>
              </p>
            </div>
            <div className="middle">
              <button>
                <span className="crypto-icon"></span>
                <span className="crypto-name">
                  WETH <RiArrowDropDownLine />
                </span>
              </button>
              <p>1819.054</p>
            </div>

            <div className="bottom">
              <p className="crypto-fullname">Wrapper Ethereum</p>
              <p className="some-value">~$3 309 059</p>
            </div>
          </div>
          <div className="swap-arrow">
            <BiDownArrowAlt size={30} color="white" />
          </div>
          <div className="swap-to">
            <div className="top">
              <p>You Buy</p>
              <p>
                Balance : <span className="balance">0</span>
              </p>
            </div>
            <div className="middle">
              <button>
                <span className="crypto-icon"></span>
                <span className="crypto-name">
                  WETH <RiArrowDropDownLine />
                </span>
              </button>
              <p>1819.054</p>
            </div>
            <div className="bottom">
              <p className="crypto-fullname">Wrapper Ethereum</p>
              <p className="some-value">~$3 309 059</p>
            </div>
          </div>
        </div>
        <div className="third">
          <div className="third-left">
            <div className="top">
              <p>Sell WETH at rate</p>
              <p>set to market</p>
            </div>
            <div className="bottom">
              <p>0.000551241</p>

              <p>
                DAI <span></span>{" "}
              </p>
            </div>
          </div>
          <div className="third-right">
            <p>
              Expires in <span></span>{" "}
            </p>
            <select>
              <option value="option1">1 minute</option>
              <option value="option3">10 minutets</option>

              <option value="option2">1 hour</option>
              <option value="option3">10 hours</option>
              <option value="option3">1 day</option>
              <option value="option3">Custom</option>
            </select>
          </div>
        </div>
        <div className="swap-button swap-button1">
          <button>
            Give permission to use WETH <span></span>
          </button>
        </div>
        <div className="swap-button swap-button2">
          <button>Review Limit Order</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default LimitSwap;
