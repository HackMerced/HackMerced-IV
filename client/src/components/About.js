import React, { Component } from 'react';
import '../assets/css/About.css';
import Tent from '../assets/images/tent.png';

class About extends Component {
  render() {
    return (
      <div className="About fadeIn">
        <div className="container">
          <h2>ABOUT US</h2>
          <div className="text">
            <div className="info">
              <h3>What we do</h3>
              <p>HackMerced is a 36-hour annual programming competition that occurs at the University of California, Merced and is open to students from all over the world.
              During the event, participants will collaborate in teams and attend workshops to learn about new technologies.
              </p>
            </div>
            <div className="goal">
              <h3>Why we do it</h3>
              <p>Our goal is to have our participants work on meaningful projects that are impactful through their creativity and teamwork.
              </p>
            </div>
          </div>
          <img src={Tent} className="tent" alt="TENT" />
        </div>
      </div>
    );
  }
}

export default About;
