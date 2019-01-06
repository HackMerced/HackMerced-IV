import React, { Component } from 'react';
import '../assets/css/About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="container">
          <h2>ABOUT US</h2>
          <p className="info">HackMerced is a 36-hour annual programming competition that occurs at the University of California, Merced and is open to students from all over the world.
          During the event, participants will collaborate in teams and attend workshops to learn about new technologies.
          Our goal is to have our participants work on meaningful projects that are impactful through their creativity and teamwork.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
