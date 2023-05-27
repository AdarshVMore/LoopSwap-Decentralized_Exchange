import React from "react";
import "./maincontainer.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimpleSwap from "../../components/simpleswap/SimpleSwap";
import ClassicSwap from "../../components/classicswap/ClassicSwap";
import LimitSwap from "../../components/limitswap/LimitSwap";
import P2PSwap from "../../components/p2pswap/P2PSwap";
import Navbar from "../navbar/Navbar";
function MainContainer() {
  return (
    <div className="MainContainer">
      <BrowserRouter>
         <Navbar/>
        <Routes>
          <Route path="/" element={<SimpleSwap />} />
          <Route path="/classicswap" element={<ClassicSwap />} />
          <Route path="/limitswap" element={<LimitSwap />} />
          <Route path="/p2pswap" element={<P2PSwap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainContainer;
