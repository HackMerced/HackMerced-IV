import React, { Component } from 'react';
import '../assets/css/Home.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Home extends Component {
  render() {
    return (
      <div className="Home" id="Home">
      <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
        <div className="container bg">
          <div className="content">
            <ScrollAnimation animateIn="fadeInDown" delay={1000} duration={0.5} animateOnce="true">

              <h1>HackMerced IV</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInDown' delay={1500} animateOnce="true">

              <h2>March 1st - 3rd @ UC Merced</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInDown' delay={2000} animateOnce="true">

            <a className="Apply button" href='https://hackmerced1.typeform.com/to/FsXiEC' target="_blank"><strong>Apply</strong></a>
            <a className="Volunteer button" href='https://hackmerced1.typeform.com/to/OU59Ac' target="_blank"><strong>Volunteer</strong></a>
            </ScrollAnimation>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Home;
