import React, { useState } from "react";
import { ethers } from "ethers";

import "./navbar.css";
import logo from "../../../assets/images/logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import {BsGraphUpArrow, BsWindowDock} from 'react-icons/bs'

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
                  <a href="/dex" onClick={handleClearButtonClick}><BsWindowDock/> &nbsp;&nbsp; Simple swap </a>
                  {/* <Link to={"/"} href="#"><BsWindowDock/> &nbsp;&nbsp; Simple swap</Link>
                  <br></br> */}
                  {/* <Link to={"/classicswap"} href="#"><BsGraphUpArrow/> &nbsp; &nbsp; Classic Swap</Link> */}
                  <a href="/dex/classicswap"  onClick={handleButtonClick}> <BsGraphUpArrow/> &nbsp; Classic Swap</a>
                  <a href="#">Link 3</a>
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
                  <a href="#">Link 4</a>
                  <a href="#">Link 5</a>
                  <a href="#">Link 6</a>
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
                  <a href="#">Link 10</a>
                  <a href="#">Link 11</a>
                  <a href="#">Link 12</a>
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
                  <a href="#">Link 13</a>
                  <a href="#">Link 14</a>
                  <a href="#">Link 15</a>
                </div>
              )}
            </li>
            <li>
              <a href="">Buy Crypto</a>
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
