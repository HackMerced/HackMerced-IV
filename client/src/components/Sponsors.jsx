import React from "react";
import "../assets/css/Sponsors.css";
import CITRIS from "../assets/images/CITRIS.png";
import UCANR from "../assets/images/UCANR.png";
import Venture from "../assets/images/VentureLab.png";
import Monster from "../assets/images/Monster.png";
import Wolfram from "../assets/images/Wolfram.png";
import Craze from "../assets/images/Craze.png";
import Vanguard from "../assets/images/Vanguard.png";
import Merco from "../assets/images/Merco.png";
import CZI from "../assets/images/CZI.png";
import MM from "../assets/images/MakeyMakey.png";
import RB from "../assets/images/YerbaMate.png";
import SM from "../assets/images/StickerMule.png";
import CM from "../assets/images/CoolerMaster.png";
import GDC from "../assets/images/GoodDayChocolate.png";
import ASUCM from "../assets/images/ASUCM.png";
import OSL from "../assets/images/OSL.png";
import MLH from "../assets/images/MLH.png";
import Raccoon from "../assets/images/raccoon4.png";
import ScrollAnimation from "react-animate-on-scroll";

const Sponsors = () => (
  <div className="Sponsors" id="Sponsors">
    <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
      <div className="container">
        <section className="sponsoring">
          <h2>
            <u>PAST SPONSORS</u>
          </h2>
          <div className="top">
            <div className="icon Citris">
              <a
                href="http://citris.ucmerced.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={CITRIS} alt="CITRIS" />
              </a>
            </div>
            <div className="icon Venture">
              <a
                href="https://venturelab.ucmerced.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Venture} alt="VentureLab" />
              </a>
            </div>
          </div>
          <div className="top-next">
            <div className="icon Ucanr">
              <a
                href="https://ucanr.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={UCANR} alt="UCANR" />
              </a>
            </div>
          </div>
          <div className="rows">
            <div className="icon Craze">
              <a
                href="http://crazedigitalmedia.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Craze} alt="Craze" />
              </a>
            </div>
            <div className="icon Wolfram">
              <a
                href="http://www.wolfram.com/?source=nav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Wolfram} alt="Wolfram" />
              </a>
            </div>
            <div className="icon CZI">
              <a
                href="https://chanzuckerberg.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={CZI} alt="CZI" />
              </a>
            </div>
            <div className="icon MakeyMakey">
              <a
                href="https://makeymakey.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={MM} alt="MakeyMakey" />
              </a>
            </div>
            <div className="icon StickerMule">
              <a
                href="http://hackp.ac/mlh-stickermule-hackathons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={SM} alt="StickerMule" />
              </a>
            </div>
            <div className="icon CoolerMaster">
              <a
                href="http://www.coolermaster.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={CM} alt="CoolerMaster" />
              </a>
            </div>
            <div className="icon Monster">
              <a
                href="https://www.monsterenergy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Monster} alt="Monster Energy" />
              </a>
            </div>
            <div className="icon Merco">
              <a
                href="https://merco.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Merco} alt="Merco" />
              </a>
            </div>
            <div className="icon GoodDayChocolate">
              <a
                href="https://www.gooddaychocolate.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GDC} alt="Good Day Chocolates" />
              </a>
            </div>
            <div className="icon RedBull">
              <a
                href="https://guayaki.com/yerba-mate/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={RB} alt="RedBull" />
              </a>
            </div>
          </div>
        </section>
        <section className="supporters">
          <h2>
            <u>PAST SUPPORTERS</u>
          </h2>
          <div className="rows top">
            <div className="icon MLH">
              <a
                href="https://mlh.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={MLH} alt="MLH" />
              </a>
            </div>
            <div className="icon Vanguard">
              <a
                href="https://engr-advising.ucmerced.edu/student-orgs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Vanguard} alt="Vanguard" />
              </a>
            </div>
            <div className="icon ASUCM">
              <a
                href="https://asucm.ucmerced.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ASUCM} alt="ASUCM" />
              </a>
            </div>
            <div className="icon OSL">
              <a
                href="https://studentlife.ucmerced.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={OSL} alt="OSL" />
              </a>
            </div>
          </div>
        </section>
        <div className="prompt">
          <h3>Interested in sponsoring us?</h3>
          <p>
            Email us at{" "}
            <a
              href="mailto:sponsorship@hackmerced.com"
              style={{ textDecoration: "none", color: "#D7AA27" }}
            >
              sponsorship@hackmerced.com
            </a>
            .
          </p>
        </div>
        <div className="image">
          <img src={Raccoon} className="Raccoon" alt="Raccoon" />
        </div>
      </div>
    </ScrollAnimation>
  </div>
);

export default Sponsors;
