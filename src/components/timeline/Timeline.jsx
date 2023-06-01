import React, { useEffect, useRef } from "react";
import "./timeline.css";
import dumy from "../../assets/images/grayrectangle.jpeg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function Timeline() {
  const circleRef = useRef(null);
  const dateRef = useRef(null);
  const eachContentRef = useRef(null);

  // useEffect(() => {
  //   const circle = circleRef.current;
  //   const date = dateRef.current;
  //   const eachContent = eachContentRef.current;

  //   gsap.fromTo(
  //     ".each-content",
  //     {
  //       opacity: 0.5,
  //     },
  //     {
  //       opacity: 1,
  //       duration: 0.3,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: eachContent,
  //         pin: ".circle",
  //         pin: ".date",
  //         start: "top 50%",
  //         end: "bottom 50%",
  //         toggleActions: "restart reverse restart reverse",
  //         //   markers: true,
  //       },
  //     }
  //   );
  //   // gsap.fromTo(
  //   //   ".circle",
  //   //   {
  //   //     y: 0,
  //   //   },
  //   //   {
  //   //     y: 100,
  //   //     duration: 0.3,
  //   //     stagger: 0.1,
  //   //     scrollTrigger: {
  //   //       trigger: eachContent,
  //   //       start: "top 50%",
  //   //       end: "bottom 100%",
  //   //       toggleActions: "restart reverse restart reverse",
  //   //       markers: true,
  //   //       toggleClass: "fixIt",
  //   //     },
  //   //   }
  //   // );
  // });

  return (
    <div className="timeline">
      <div className="heading days-one">Timeline for Release</div>
      <div className="sub-heading gray">
        Explore the Fascinating Time Line of our Release, Witnessing the
        Evolution and Milestones of Innovation Unfold!
      </div>
      <div className="toggle-btns">
        <div className="toggle"></div>
        <p>Phase I</p>
        <p>Phase II</p>
        <p>Phase III</p>
      </div>
    </div>
  );
}

export default Timeline;
