import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.png";
import twitter from "../../assets/images/twitter.png";
import linkedIn from "../../assets/images/linkedIn.png";
import telegram from "../../assets/images/telegram.png";

function Footer() {
  return (
    <div className="footer">
      <div className="all-links">
        <div className="col1">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="copyright">
            ©2023 Look of Infinity . All rights reserved.
          </div>
          <div className="socials">
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={telegram} alt="" />
            </a>
            <a href="">
              <img src={linkedIn} alt="" />
            </a>
          </div>
        </div>
        <div className="col2">
          <div className="heading">Company</div>
          <a href="">About us</a>
          <a href="">Blog</a>
          <a href="">Contact us</a>
        </div>
        <div className="col3">
          <div className="heading">Suport</div>
          <a href="">Help Center</a>
          <a href="">Terms of services</a>
          <a href="">Privacy Policy</a>
        </div>
        <div className="col4">
          <input type="email" />
          <button>Get Updates</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
