import React, { Component } from 'react';
import '../assets/css/Nav.css';
import { stack as Menu } from 'react-burger-menu'
import { Link, animateScroll as scroll } from "react-scroll";

class Nav extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="Nav" id="Nav">
        <nav className="wide-navbar">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                className="link"
                onClick={this.scrollToTop}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="link"
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="link"
                activeClass="active"
                to="Tracks"
                spy={true}
                smooth={true}
                duration={500}
              >
                Tracks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="link"
                activeClass="active"
                to="Schedule"
                spy={true}
                smooth={true}
                duration={500}
              >
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="link"
                activeClass="active"
                to="Faqs"
                spy={true}
                smooth={true}
                duration={500}
              >
                Faqs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="link"
                activeClass="active"
                to="Sponsors"
                spy={true}
                smooth={true}
                duration={500}
              >
                Sponsors
              </Link>
            </li>
          </ul>
        </nav>

				<Menu right>
          <Link
            className="link"
            onClick={this.scrollToTop}
          >
            Home
          </Link>
          <Link
            className="link"
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            className="link"
            activeClass="active"
            to="Tracks"
            spy={true}
            smooth={true}
            duration={500}
          >
            Tracks
          </Link>
          <Link
            className="link"
            activeClass="active"
            to="Schedule"
            spy={true}
            smooth={true}
            duration={500}
          >
            Schedule
          </Link>
          <Link
            className="link"
            activeClass="active"
            to="Faqs"
            spy={true}
            smooth={true}
            duration={500}
          >
            Faqs
          </Link>
          <Link
            className="link"
            activeClass="active"
            to="Sponsors"
            spy={true}
            smooth={true}
            duration={500}
          >
            Sponsors
          </Link>
      	</Menu>

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
