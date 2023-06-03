import React, { useState } from "react";
import "./nav.css";
import logo from "../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [data, setData] = useState("false");
  const handleClearButtonClick = () => {
    // Remove value from session storage
    sessionStorage.removeItem('key',data);
    setData(true);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div
        onClick={() => {
          setShowNavbar(true);
        }}
        className={!showNavbar ? "toggle-open" : "hide"}
      >
        <GiHamburgerMenu size={24} />
      </div>
      <ul className={showNavbar ? "links active" : "links"}>
        <li>
          <div
            className="toggle-close"
            onClick={() => {
              setShowNavbar(false);
            }}
          >
            <AiOutlineClose color="white" size={24} />
          </div>
        </li>
        <li>
          <a href="#works">How it works</a>
        </li>
        <li>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li>
          <a href="#tokonomics">Tokonomics</a>
        </li>
        <li>
          <a href="/dex" onClick={handleClearButtonClick}>LoopSwap</a>
        </li>
        <li>
          <a href="#">Loop Network</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
