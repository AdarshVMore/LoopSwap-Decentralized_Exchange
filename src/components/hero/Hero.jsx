import React from "react";
import "./hero.css";
import car from "../../assets/images/car3.png";

function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <div className="heading days-one">
          <p>
            <span>
              Rev your engines, <br /> race to the <br /> future with <br />{" "}
              Loop of Infinity
            </span>
          </p>
        </div>
        <div className="sub-heading gray">
          <p>
            <span>
              where gaming meets blockchain and losses meet their match!
            </span>
          </p>
        </div>
        <div className="hide-img">
          <img src={car} alt="car" />
        </div>
        <div className="btns">
          <button className="register-btn">Register</button>
          <button className="join-btn">Join Waitlist</button>
        </div>
      </div>
      <div className="right">
        <img src={car} alt="car" />
        <div className="blur"></div>
      </div>
    </div>
  );
}

export default Hero;
