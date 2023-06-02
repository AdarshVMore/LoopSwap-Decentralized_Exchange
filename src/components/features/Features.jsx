import React, { useRef, useEffect } from "react";
import "./features.css";
import svg1 from "../../assets/images/Icon.svg";
import svg2 from "../../assets/images/Icon-1.svg";
import svg3 from "../../assets/images/Icon-2.svg";
import feature from "../../assets/images/Feature Icon with circle.svg";
import feature1 from "../../assets/images/feature1.png";
import feature2 from "../../assets/images/feature2.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Features() {
  const featureRef = useRef(null);
  const eachFeatureRef = useRef(null);
  const feature2_ref = useRef(null);
  const feature1_ref = useRef(null);
  useEffect(() => {
    const featureHeader = featureRef.current;
    const portArticle = eachFeatureRef.current;
    const feature1 = feature2_ref.current;
    const feature2 = feature1_ref.current;

    gsap.fromTo(
      ".featureHeader",
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: featureHeader,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ".each_Feature",
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
          trigger: portArticle,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ".feature1_Img",
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.3,
        delay: 0.3,

        scrollTrigger: {
          trigger: feature2,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ".feature1_Info",
      {
        opacity: 0,
        x: -15,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: feature2,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ".feature2Img",
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.3,
        delay: 0.3,

        scrollTrigger: {
          trigger: feature1,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ".feature2Info",
      {
        opacity: 0,
        x: 25,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.3,
        delay: 0.3,

        scrollTrigger: {
          trigger: feature1,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
  });
  return (
    <div className="features" ref={featureRef}>
      <div className="top featureHeader">
        <div className="heading days-one">Features</div>
        <p className="info gray">
          Players can race against each other, compete in tournaments, and win
          rewards in the form of cryptocurrency tokens, which can be traded or
          used within the game ecosystem
        </p>
        <div className="bottom " ref={eachFeatureRef}>
          <div className="each 1 each_Feature">
            <div className="img">
              <img src={svg1} alt="" />
            </div>
            <div className="name">Earn Crypto</div>
            <div className="info gray">
              Players can earn cryptocurrencies while racing in the game
            </div>
          </div>
          <div className="each 1 each_Feature">
            <div className="img">
              <img src={svg2} alt="" />
            </div>
            <div className="name">Decentralised</div>
            <div className="info gray">
              The game operates on a decentralized blockchain network
            </div>
          </div>
          <div className="each 1 each_Feature">
            <div className="img">
              <img src={svg3} alt="" />
            </div>
            <div className="name">Rewards</div>
            <div className="info gray">
              Players receive various rewards, including cryptocurrencies
            </div>
          </div>
          <div className="blur"></div>
        </div>
      </div>
      <div className="each-feature">
        <div className="feature feature1" ref={feature1_ref}>
          <div className="left feature1_Info">
            <div className="feature-no gray">FEATURE 1</div>
            <div className="feature-name days-one">Loss proof Dex</div>
            <div className="feature-info">
              covers up to 60% of user losses in case of market volatility. This
              ensures that players can enjoy the game without worrying about
              losing their investments
            </div>
            <div className="hide-img">
              <img src={feature1} alt="" />
            </div>
            <div className="feature-grid">
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Non-Custodial Wallets</div>
                  <div className="info">
                    Trade securely from your own wallet, reducing centralized
                    exchange risks
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Decentralized Order Matching</div>
                  <div className="info">
                    Directly trade on the blockchain, eliminating intermediaries
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Multi-Signature Security</div>
                  <div className="info">
                    Enhanced protection with multi-signature technology.
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">On-Chain Auditing</div>
                  <div className="info">
                    Transparent transaction records on the blockchain for
                    trustworthy auditing.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right feature1_Img">
            <img src={feature1} alt="" />
          </div>
        </div>
        <div className="feature feature2" ref={feature2_ref}>
          <div className="blur"></div>

          <div className="right feature2Img">
            <img src={feature2} alt="" />
          </div>
          <div className="left feature2Info">
            <div className="feature-no gray">FEATURE 2</div>
            <div className="feature-name days-one">
              Loop Network Integration
            </div>
            <div className="feature-info">
              This technology allows for fast and efficient gameplay, without
              compromising on security or decentralization
            </div>
            <div className="hide-img">
              <img src={feature2} alt="" />
            </div>
            <div className="feature-grid">
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Cross-Chain Compatibility</div>
                  <div className="info">
                    Interact with multiple blockchain networks for asset
                    transfer and data exchange.{" "}
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Interoperability</div>
                  <div className="info">
                    Connect and communicate between different blockchain
                    networks for seamless information sharing.{" "}
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Protocol Agnostic</div>
                  <div className="info">
                    Support various blockchain protocols, enabling integration
                    with diverse networks.{" "}
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Scalability and Performance</div>
                  <div className="info">
                    ptimize integration for efficient operations across
                    different blockchain environments.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
