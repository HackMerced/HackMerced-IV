import React, { Component } from 'react';
import '../assets/css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer" id="Footer" >
        <div className="container">
          <div className="credits">
            <span className="copyright">
              © 2019 HackMerced. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
