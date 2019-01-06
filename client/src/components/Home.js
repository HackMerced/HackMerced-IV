import React, { Component } from 'react';
import '../assets/css/Home.css';

class Home extends Component {

  render() {

    return (
      <div className="Home">
        <div className="header-section">
          <div className="container">
            <h1>HackMerced IV</h1>
            <h2>March 1st - 3rd @ UC Merced</h2>

            <a className="Apply button" href='https://hackmerced1.typeform.com/to/FsXiEC'><strong>Apply</strong></a>
            <a className="Volunteer button" href='https://hackmerced1.typeform.com/to/rqqcxV'><strong>Volunteer</strong></a>

            <a id="mlh-trust-badge" style={{ display:"block", maxWidth:"100px", minWidth:"60px", position:"absolute", left:"50px", top:"0", width:"10%", zIndex:"10000"}}
              href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2019-black&amp;utm_content=black"
              target="_blank">
              <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg" alt="Major League Hacking 2019 Hackathon Season"
              style={{width:"120%"}} className="mlh-badge" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
