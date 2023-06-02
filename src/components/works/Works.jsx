import React, { useRef, useEffect } from "react";
import "./work.css";
import work1 from "../../assets/images/work1.jpg";
import work2 from "../../assets/images/work2.png";
import work3 from "../../assets/images/work3.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Works() {
  const work = useRef(null);
  const eachWorkRef = useRef(null);

  useEffect(() => {
    const workHeader = work.current;
    const eachWork = eachWorkRef.current;

    gsap.fromTo(
      ".workHeader",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: workHeader,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ".each-work",
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: eachWork,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
  });
  return (
    <div className="work" id="works" ref={work}>
      <div className="workHeader ">
        <div className="blur"></div>

        <div className="heading days-one">How it Works</div>
        <div className="info gray">
          <p>
            The LOOP OF INFINITY is more than just a racing game - it's an
            entire ecosystem designed to empower both players and creators alike
            . Marketplace will allow creators to sell their unique designs and
            assets to other players
          </p>
        </div>
      </div>
      <div className="all-work" ref={eachWorkRef}>
        <div className="each-work">
          <div className="img">
            <img src={work1} alt="" />
          </div>
          <div className="step gray">Register</div>
          <div className="text">
            Register yourself and connect your wallet to enter into the game
          </div>
        </div>
        <div className="each-work">
          <div className="img">
            <img src={work2} alt="" />
          </div>
          <div className="step gray">Play</div>
          <div className="text">
            Deposit LOI token in the game to participate in the tournaments, Buy
            cars and Modifications
          </div>
        </div>
        <div className="each-work">
          <div className="img">
            <img src={work3} alt="" />
          </div>
          <div className="step gray">Earn</div>
          <div className="text">
            Enter in the race compete with others complete missions and earn the
            reward
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
