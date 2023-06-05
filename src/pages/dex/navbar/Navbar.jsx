import React, { useState } from "react";
import { ethers } from "ethers";

import "./navbar.css";
import logo from "../../../assets/images/logo.png";
import { RiArrowDropDownLine, RiNodeTree } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import {BsGraphUpArrow, BsWindowDock} from 'react-icons/bs'
import { Link } from "react-router-dom";
import {AiFillBug, AiFillMessage, AiOutlineBarChart} from "react-icons/ai"
import {RiPlantFill} from 'react-icons/ri'
import {MdElectricBolt} from 'react-icons/md'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
const Navbar = () => {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const [connected, setConnected] = useState(false);

  const [connectedAddress, setConnectedAddress] = useState("");

  const connectToMetamask = async () => {
    try {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const address = await signer.getAddress();
      const truncatedAddress = `${address.slice(0, 4)}...${address.slice(-4)}`;

      setConnectedAddress(truncatedAddress);
      setConnected(true);

      // Add any other desired functionality
    } catch (error) {
      console.error("Error connecting to Metamask:", error);
    }
  };
  
  const [data, setData] = useState("false");

  const toggelDropdown = () => {
    setIsConnectOpen(!isConnectOpen);
  };

  const handleMouseEnter = (index) => {
    setDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setDropdownIndex(null);
  };

  const handleButtonClick = () => {
    sessionStorage.setItem('key',data);
    setData("false");
  };

  
  const handleClearButtonClick = () => {
    // Remove value from session storage
    sessionStorage.removeItem('key',data);
    setData(true);
  };
  const connectLinks = [
    {
      name: "Link 1",
      logo: "logo1.png",
      link: "#link1",
    },
    {
      name: "Link 2",
      logo: "logo2.png",
      link: "#link2",
    },
    {
      name: "Link 3",
      logo: "logo3.png",
      link: "#link3",
    },
  ];

  return (
    <nav>
      <div className="left">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="links">
          <ul>
            <li
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                Trade <RiArrowDropDownLine size={24} />
              </span>
              {dropdownIndex === 0 && (
                <div className="dropdown-content">
                  <Link to="/dex" onClick={handleClearButtonClick}><BsWindowDock/> &nbsp;&nbsp; Simple swap </Link>
                  <br />
                  {/* <Link to={"/"} href="#"><BsWindowDock/> &nbsp;&nbsp; Simple swap</Link>
                  <br></br> */}
                  {/* <Link to={"/classicswap"} href="#"><BsGraphUpArrow/> &nbsp; &nbsp; Classic Swap</Link> */}
                  <Link to="/dex/classicswap"  onClick={handleButtonClick}> <BsGraphUpArrow/> &nbsp; Classic Swap</Link>
                  <br/>
                  <Link to="/dex/limitorder" href="#"><AiOutlineBarChart/>&nbsp;&nbsp;Limit Order <button className="connect-button2" >coming soon ....</button></Link>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                DAO <RiArrowDropDownLine size={24} />
              </span> 
              {dropdownIndex === 1 && (
                <div className="dropdown-content">
                  <Link to={"/dex/dao/staking"}><RiPlantFill/>&nbsp;  Staking  <button className="connect-button2">coming soon...</button></Link>
                  <br />
                  <Link to={"/#works"}><RiNodeTree/>&nbsp; Governance</Link>
                  <br />
                  <a href="#"><MdElectricBolt/>&nbsp;  snapshots</a>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                Earn <RiArrowDropDownLine size={24} />
              </span>
              {dropdownIndex === 2 && (
                <div className="dropdown-content">
                  <a href="#">Link 7</a>
                  <a href="#">Link 8</a>
                  <a href="#">Link 9</a>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                More <RiArrowDropDownLine size={24} />
              </span>
              {dropdownIndex === 3 && (
                <div className="dropdown-content">
                  <a href="#">◀
                             Documentation/▶</a>
                             <br />
                  <a href="#"><AiFillMessage/>&nbsp; Help</a>
                  <br/>
                  <a onClick={()=>{
                    
                  }} href="#"><AiFillBug/>&nbsp;  Report bug</a>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                Bridges <RiArrowDropDownLine size={24} />
              </span>
              {dropdownIndex === 4 && (
                <div className="dropdown-content">

                  <a href="https://cbridge.celer.network/"><img src="data:image/png;base64,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" alt="" className="avatar"/> &nbsp; Binanace </a>
                  <br/>
                  <a href="https://wallet.polygon.technology/polygon/bridge/"><img src="data:image/png;base64,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" className="avatar" alt="Polygon Bridge"/> &nbsp;&nbsp;Polygon </a>
                  <br/>
                  <a href="https://core.app/bridge/"><img src="data:image/png;base64,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" alt="" className="avatar"/> &nbsp;Avalanche</a>
                </div>
              )}
            </li>
            <li style={{filter:"blur(2px)"}}>
              <a  href="">Buy Crypto</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-right">
        {connected ? (
          <div className="isConnected">
            <div>
              <button
                className="connect-button"
                onClick={() => {
                  toggelDropdown();
                }}
              >
                Ethereum <RiArrowDropDownLine size={24} />
              </button>

              {isConnectOpen ? (
                <>
                  <div className="dropdown-content2">
                    {connectLinks.map((link, index) => (
                      <li className="connect-item" key={index}>
                        <img
                          src={link.logo}
                          alt="Logo"
                          className="connect-logo"
                        />
                        <a href={link.link}>{link.name}</a>
                      </li>
                    ))}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <p>
              {/* <span className="meta-logo">
                <img src={Metamask} alt="" />
              </span> */}
              <span>{connectedAddress}</span>
            </p>
          </div>
        ) : (
          <>
            <button
              className="connect-button"
              onClick={() => {
                connectToMetamask();
              }}
            >
              Connect Wallet
            </button>
          </>
        )}
        <li className="settings-button">
          <FiSettings size={24} color="#4a7a90" />
        </li>
        <div className="dropdown-setting"></div>
      </div>
    </nav>
  );
};

export default Navbar;
