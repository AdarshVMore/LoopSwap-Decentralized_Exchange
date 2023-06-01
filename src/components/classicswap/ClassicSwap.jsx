import React from "react";
import '../classicswap/classicswap.css'
import SimpleSwap from "../simpleswap/SimpleSwap";
import  Exchangecharts  from "./Exchangecharts";
function ClassicSwap() {
  return <div className="container">
  <div className="left-section"style={{ width:"800px",color:"white"}}>
   <Exchangecharts></Exchangecharts>
  </div>
  <div className="right-section" style={{color:"white"}}>
    
    <SimpleSwap></SimpleSwap>
  </div>
</div>
}

export default ClassicSwap;
