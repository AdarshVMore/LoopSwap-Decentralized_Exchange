import React, { useState, useEffect } from "react";
import Navbar from "../../pages/dex/navbar/Navbar";
import "../classicswap/classicswap.css";
import SimpleSwap from "../simpleswap/SimpleSwap";
import Exchangecharts from "./Exchangecharts";

function ClassicSwap() {
  const [selectedToken, setSelectedToken] = useState(null);

 

  const handleTokenSelect = (token) => {
    setSelectedToken(token);
  };

  return (
    <div className="MainContainer">
      <Navbar />
      <div className="left-section" style={{ width: "800px", color: "white" }}>
        <Exchangecharts selectedToken={selectedToken} />
      </div>
      <div className="right-section" style={{ color: "white" }}>
       <SimpleSwap onTokenSelect={handleTokenSelect} />
      </div>
    </div>
  );
}

export default ClassicSwap;
