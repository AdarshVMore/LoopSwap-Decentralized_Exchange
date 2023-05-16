import React from "react";
import "./maincontainer.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimpleSwap from "../../components/simpleswap/SimpleSwap";

function MainContainer() {
  return (
    <div className="MainContainer">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<SimpleSwap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainContainer;
