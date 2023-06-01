import React from "react";
import Nav from "../../components/nav/Nav";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import Works from "../../components/works/Works";
import Footer from "../../components/footer/Footer";
import Timeline from "../../components/timeline/Timeline";
import Tokonomics from "../../components/tokonomics/Tokonomics";

function Landing() {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <Timeline />
      <Works />
      <Tokonomics />
      <Footer />
    </div>
  );
}

export default Landing;
