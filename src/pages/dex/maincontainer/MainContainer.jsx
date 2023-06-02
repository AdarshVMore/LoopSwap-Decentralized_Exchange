import React from "react";
import "./maincontainer.css";
import { Routes, Route } from "react-router-dom";
import SimpleSwap from "../../../components/simpleswap/SimpleSwap";
import ClassicSwap from "../../../components/classicswap/ClassicSwap";
import LimitSwap from "../../../components/limitswap/LimitSwap";
import P2PSwap from "../../../components/p2pswap/P2PSwap";

function MainContainer() {
  return (
    <div className="MainContainer">
      <Routes>
      <Route path="/" element={<SimpleSwap />} />
          <Route path="/limitswap" element={<LimitSwap />} />
          <Route path="/p2pswap" element={<P2PSwap />} />
      </Routes>
    </div>
  );
}

export default MainContainer;
