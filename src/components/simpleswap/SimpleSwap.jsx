import React from "react";
import { RiAddFill } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { TbReload } from "react-icons/tb";
import "./simpleswap.css";

function SimpleSwap() {
  return (
    <div className="simple-swap">
      <div className="top-menu">
        <div className="left">
          <a href="">Swap</a>
          <a href="">Limit</a>
          <a href="">P2P</a>
        </div>
        <div className="right">
          <div className="btn reload-btn">
            <TbReload size={24} color="white" />
          </div>
          <div className="btn add-btn">
            <RiAddFill size={24} color="white" />
          </div>
          <div className="btn swap-setting-btn">
            <VscSettings size={24} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleSwap;
