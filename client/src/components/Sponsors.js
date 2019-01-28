import React, { Component } from 'react';
import '../assets/css/Sponsors.css';
import CITRIS from '../assets/images/CITRIS.png';
import UCANR from '../assets/images/UCANR.png';
import CRAZE from '../assets/images/Craze.png';
import SM from '../assets/images/StickerMule.svg';
import CM from '../assets/images/CoolerMaster.png';
import GDC from '../assets/images/GoodDayChocolate.png';
import ASUCM from '../assets/images/ASUCM.png';
import OSL from '../assets/images/OSL.png';
import Raccoon from '../assets/images/raccoon4.png';
import ScrollAnimation from 'react-animate-on-scroll';

class Sponsors extends Component {
  render() {
    return (
      <div className="Sponsors" id="Sponsors" >
      <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce="true">
        <h2><u>SPONSORS</u></h2>
        <div className="container">
          <div className="gold">
            <div className="icon Cirtis">
              <a href="http://citris.ucmerced.edu"><img src={CITRIS} alt="CITRIS" /></a>
            </div>
            <div className="icon Ucanr">
              <a href="https://ucanr.edu"><img src={UCANR} alt="UCANR" /></a>
            </div>
          </div>
          <div className="silver">
            <div className="icon Craze">
              <a href="http://crazedigitalmedia.com"><img src={CRAZE} alt="CRAZE" /></a>
            </div>
            <div className="icon StickerMule">
              <a href="http://hackp.ac/mlh-stickermule-hackathons"><img src={SM} alt="StickerMule" /></a>
            </div>
          </div>
          <div className="column">
            <div className="row">
              <div className="bronze">
                <div className="icon CoolerMaster">
                  <a href="http://www.coolermaster.com/"><img src={CM} alt="CoolerMaster" /></a>
                </div>
                <div className="icon GoodDayChocolate">
                  <a href="https://www.gooddaychocolate.com"><img src={GDC} alt="Good Day Chocolates" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="supporters">
            <div className="row">
              <div className="bronze">
                <div className="icon ASUCM">
                  <a href="https://asucm.ucmerced.edu"><img src={ASUCM} alt="ASUCM" /></a>
                </div>
                <div className="icon OSL">
                  <a href="https://studentlife.ucmerced.edu"><img src={OSL} alt="OSL" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prompt">
          <h3>Interested in sponsoring us?</h3>
          <p>Email us at <a href="mailto:sponsorship@hackmerced.com" style={{textDecoration:"none", color:"#D7AA27"}}>sponsorship@hackmerced.com</a>.</p>
        </div>
        <div className="image">
          <img src={Raccoon} className="Raccoon" alt="Raccoon" />
        </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Sponsors;
