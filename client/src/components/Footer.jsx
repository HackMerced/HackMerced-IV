import React from "react";
import "../assets/css/Footer.css";

const Footer = () => (
  <div className="Footer" id="Footer">
    <div className="container">
      <div className="social">
        <a href="mailto:general@hackmerced.com?subject=HackMerced Questions&body=Dear HackMerced,">
          <i className="fas fa-envelope" />
        </a>
        <a
          href="https://www.facebook.com/hackmerced/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-square" />
        </a>
        <a
          href="https://www.instagram.com/hackmerced/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
      </div>
      <div className="credits">
        <span className="copyright">
          © 2019 HackMerced. All Rights Reserved.
        </span>
      </div>
    </div>
  </div>
);

export default Footer;
