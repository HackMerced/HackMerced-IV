import React, { Component } from 'react';
import '../assets/css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer" id="Footer" >
        <div className="container">
          <div className="social">
            <a href="mailto:general@hackmerced.com?subject=HackMerced Questions&body=Dear HackMerced,"><i class="fas fa-envelope"></i></a>
            <a href="https://www.facebook.com/hackmerced/" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/hackmerced/" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
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
