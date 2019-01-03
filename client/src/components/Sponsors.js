import React, { Component } from 'react';
import '../assets/css/Sponsors.css';
import CITRIS from '../assets/images/CITRIS.png';
import UCANR from '../assets/images/UCANR.png';
import CM from '../assets/images/CoolerMaster.png';
import GDC from '../assets/images/GoodDayChocolate.png';

class Sponsors extends Component {
  render() {
    return (
      <div className="Sponsors">
        <h2>SPONSORS</h2>
        <div className="container">
          <div className="icon">
            <img src={CITRIS} alt="CITRIS" width="700px" />
          </div>
          <div className="icon">
            <img src={UCANR} alt="UCANR" width="600px" />
          </div>
          <div className="column">
            <div className="row">
              <div className="icon">
                <img src={CM} alt="CoolerMaster" width="350px" />
              </div>
              <div className="icon">
                <img src={GDC} alt="Good Day Chocolates" width="350px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
