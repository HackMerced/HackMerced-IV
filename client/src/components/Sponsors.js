import React, { Component } from 'react';
import '../assets/css/Sponsors.css';
import CITRIS from '../assets/images/CITRIS.png';
import UCANR from '../assets/images/UCANR.png';
import CRAZE from '../assets/images/Craze.png';
import CM from '../assets/images/CoolerMaster.png';
import GDC from '../assets/images/GoodDayChocolate.png';
import Raccoon from '../assets/images/raccoon4.png';

class Sponsors extends Component {
  render() {
    return (
      <div className="Sponsors" id="Sponsors" >
        <h2>SPONSORS</h2>
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
        </div>
        <div className="prompt">
          <h3>Interested in sponsoring us?</h3>
          <p>Email us at <a href="mailto:sponsorship@hackmerced.com" style={{textDecoration:"none", color:"#D7AA27"}}>sponsorship@hackmerced.com</a>.</p>
        </div>
        <div className="image">
          <img src={Raccoon} className="Raccoon" alt="Raccoon" />
        </div>
      </div>
    );
  }
}

export default Sponsors;
