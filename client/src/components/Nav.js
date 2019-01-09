import React, { Component } from 'react';
import '../assets/css/Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav" id="Nav">
        <nav>
          <ul>
            <li><a href="#Home"><p>Home</p></a></li>
            <li><a href="#About"><p>About</p></a></li>
            <li><a href="#Faqs"><p>Faqs</p></a></li>
            <li><a href="#Sponsors"><p>Sponsors</p></a></li>
          </ul>
        </nav>
        <a id="mlh-trust-badge" style={{ display:"block", maxWidth:"100px", minWidth:"60px", position:"absolute", left:"50px", top:"0", width:"10%", zIndex:"10000"}}
          href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2019-black&amp;utm_content=black"
          target="_blank">
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg" alt="Major League Hacking 2019 Hackathon Season"
          style={{width:"100%"}} className="mlh-badge" />
        </a>
      </div>
    );
  }
}

export default Nav;
