import React from "react";
import "./tokonomics.css";
import pieChart from "../../assets/images/Pie Chart.svg";
// import innermost from "../../assets/images/innermost.png";
// import innercircle from "../../assets/images/innerCicles.png";
// import graphcircle from "../../assets/images/Graph circle.png";

function Tokonomics() {
  const graph_info = [
    {
      color: "5552A5",
      percent: "46.16%",
      name: "Community  Reward",
      description: "Small description one-liner",
      tokens: "23,076,923,077",
    },
    {
      color: "894E98",
      percent: "5.77%",
      name: "Advisors",
      description: "Small description one-liner",
      tokens: "2,884,615,385",
    },
    {
      color: "9A3563",
      percent: "15.38%",
      name: "Loop Network Ecosystem",
      description: "Small description one-liner",
      tokens: "7,692,307,692",
    },
    {
      color: "7396A4",
      percent: "11.54%",
      name: "Early Investors",
      description: "Small description one-liner",
      tokens: "5,769,230,769",
    },
    {
      color: "4A65A2",
      percent: "5.77%",
      name: "Locked until game launch",
      description: "Small description one-liner",
      tokens: "2,884,615,385",
    },
    {
      color: "2247A4",
      percent: "15.38%",
      name: "Team",
      description: "Small description one-liner",
      tokens: "7,692,307,692",
    },
  ];

  return (
    <div className="tokonomics">
      <div className="heading days-one">Tokenomics</div>
      <div className="sub-heading gray">
        <p>
          "Experience the Power of LOI Unlock Limitless Possibilities with our
          Revolutionary Token, <br /> Empowering Communities and Fueling
          Innovations!
        </p>
      </div>
      <div className="chart-img">
        <img src={pieChart} alt="" />
        {/* <img src={innermost} alt="" className="innermost" />
        <img src={innercircle} alt="" className="innercircle" />
        <img src={graphcircle} alt="" className="graphcircle" /> */}
      </div>
      <div className="chart-info">
        {graph_info.map((item, index) => (
          <div className="each">
            <div
              className="right-color"
              style={{ backgroundColor: `#${item.color}` }}
            ></div>
            <div className="left-info">
              <div className="top">
                <div className="left">
                  <p> {item.percent} </p>
                </div>
                <p className="gray">{item.name}</p>
              </div>
              <div className="bottom">
                <div className="description">
                  <p className="gray">Tokens</p>
                </div>
                <div className="no-of-tokens">{item.tokens}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tokonomics;
