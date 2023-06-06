import React, { useState, useEffect } from "react";
import { RiAddFill } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { TbReload } from "react-icons/tb";
import { BiDownArrowAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./simpleswap.css";
import axios from "axios";
import Select from "react-select";

function SimpleSwap({ onTokenSelect }) {
  const [selectedLink, setSelectedLink] = useState(0);

  const selectStyles = {
    container: (provided) => ({
      ...provided,

      backgroundColor: "#131823",
    }),
    control: (provided) => ({
      ...provided,
      background: "#131823",
      backgroundColor: "#131823", // Change the background color
      color: "white", // Change the text color
    }),
  };

  const [tokens, setTokens] = useState({});
  const [tokenlist, setTokenlist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.1inch.io/v5.0/1/tokens");
        setTokens(response.data.tokens);
        console.log(tokens);
      } catch (error) {
        console.log("Error fetching token data:", error);
      }
    };
    exchange();
    fetchData();
  }, []);

  const [swap, setswap] = useState(null);

  // Accessing individual token information dynamically
  Object.keys(tokens).forEach((tokenAddress) => {
    const token = tokens[tokenAddress];
    tokenlist.push(token);
  });
  const selectTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: "black", // Set the background color of the select component
    },
    option: (provided) => ({
      ...provided,
      backgroundColor: "black", // Set the background color of options to black
    }),
  });

  const [amount, setamount] = useState("");
  //  var [data,setData] = useState("");
  var storedData = sessionStorage.getItem("key");
  //  setData(storedData);
  console.log(storedData);

  const options = tokenlist.slice(0, 500).map((token) => ({
    value: token.address,

    label: (
      // <div style={{backgroundColor:"#131823", }}>
      <div
        style={{
          backgroundColor: "#131823",
          color: "white",
          "border-radius": "5px",
        }}
      >
        <img src={token.logoURI} alt={token.name} className="logo1"></img>
        <p key={token.address}>{token.symbol}</p>
      </div>
      // </div>
    ),
  }));
  const options2 = tokenlist.slice(0, 500).map((token) => ({
    value: token.address,
    s: token,
    label: (
      // <div style={{backgroundColor:"#131823", }}>
      <div
        style={{
          backgroundColor: "#131823",
          color: "white",
          "border-radius": "5px",
        }}
      >
        <img src={token.logoURI} alt={token.name} className="logo1"></img>
        <p key={token.address}>{token.symbol}</p>
      </div>
      // </div>
    ),
  }));
  const [swap2, setswap2] = useState(null);
  const setevent2 = (props) => {
    setswap2(props);
    if (props != null && props.s != null && storedData === "false") {
      onTokenSelect(props.s); // Call the onTokenSelect callback with the selected token
    }
  };
  const setevent = (props) => {
    setswap(props);
  };
  var k = "";
  var j = "";
  const [fromtoken, setfromtoken] = useState(j);
  const [totoken, settoken] = useState(k);
  var exchange = async (fromaddress, toaddress, amount) => {
    await axios
      .get(
        `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=${fromaddress}&toTokenAddress=${toaddress}&amount=${amount}`
      )
      .then((response) => {
        k = response.data["toTokenAmount"];
        j = response.data["fromTokenAmount"];
        settoken(k);
        setfromtoken(j);
        console.log(k, response.data);
      })
      .catch((err) => console.log(err));
  };
  const setevent3 = (props) => {
    setamount(props.target.value);
  };

  return (
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
            {" "}
            <p className={selectedLink === 2 ? "selected-link" : ""}>
              P2P
            </p>{" "}
          </a>
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

      <div className="swaping-input">
        <div className="swap-from">
          <div className="top">
            <p>You Sell</p>
            <p>
              Balance : <span className="balance">0</span>
            </p>
          </div>
          <div className="middle">
            {/* <select className="crypto-icon">
               <span className="crypto-icon"></span>
              <span className="crypto-name">
                WETH <RiArrowDropDownLine />
              </span> 
               {otag}
            </select> */}
            <Select
              value={swap}
              name="fromtoken"
              className="middle"
              onChange={setevent}
              options={options}
              styles={selectStyles}
              theme={selectTheme}
            />

            <input
              text={Number}
              onChange={setevent3}
              value={amount}
              style={{
                placeholder: "white",
                backgroundColor: "#131823",
                "border-radius": "10px",
                color: "white",
              }}
              placeholder="Enter Exchanged coins"
              required={true}
            ></input>
            <p>{fromtoken}</p>
          </div>

          <div className="bottom">
            <p className="crypto-fullname"></p>
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
            {/* <button>
              <span className="crypto-icon"></span>
              <span className="crypto-name">
                WETH <RiArrowDropDownLine />
              </span>
            </button> */}
            <Select
              value={swap2}
              className="middle"
              onChange={setevent2}
              options={options2}
              styles={selectStyles}
              theme={selectTheme}
            />

            <p>{totoken}</p>
          </div>
          <div className="bottom">
            <p className="crypto-fullname">{}</p>
            <p className="some-value">~$3 309 059</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          exchange(swap.value, swap2.value, amount);
        }}
        className="live-crypto-price"
      >
        <div className="info">
          <p style={{ textAlign: "center" }}>Convert</p>
          <p></p>
        </div>
      </button>
      <div className="swap-button">
        <button>Insufficient WETH Balance</button>
      </div>
    </div>
  );
}

export default SimpleSwap;
