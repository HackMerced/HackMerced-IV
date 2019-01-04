import React, { Component } from 'react';
import '../assets/css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="container">
          <div className="credits">
            <p><span className="copyright">
              © 2019 HackMerced. All Rights Reserved.
            </span></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
