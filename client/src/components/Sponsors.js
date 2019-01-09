import React, { Component } from 'react';
import '../assets/css/Sponsors.css';
import CITRIS from '../assets/images/CITRIS.png';
import UCANR from '../assets/images/UCANR.png';
import CRAZE from '../assets/images/Craze.png';
import CM from '../assets/images/CoolerMaster.png';
import GDC from '../assets/images/GoodDayChocolate.png';

class Sponsors extends Component {
  render() {
    return (
      <div className="Sponsors" id="Sponsors" >
        <h2>SPONSORS</h2>
        <div className="container">
          <div className="gold">
            <div className="icon Cirtis">
              <img src={CITRIS} alt="CITRIS" />
            </div>
            <div className="icon Ucanr">
              <img src={UCANR} alt="UCANR" />
            </div>
          </div>
          <div className="silver">
            <div className="icon Craze">
              <img src={CRAZE} alt="CRAZE" />
            </div>
          </div>
          <div className="column">
            <div className="row">
              <div className="bronze">
                <div className="icon CoolerMaster">
                  <img src={CM} alt="CoolerMaster" />
                </div>
                <div className="icon GoodDayChocolate">
                  <img src={GDC} alt="Good Day Chocolates" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prompt">
          <h3>Interested in sponsoring us?</h3>
          <p>Email us at <a href="mailto:sponsorship@hackmerced.com" style={{textDecoration:"none", color:"#82E0AA"}}>sponsorship@hackmerced.com</a>.</p>
        </div>
      </div>
    );
  }
}

export default Sponsors;
