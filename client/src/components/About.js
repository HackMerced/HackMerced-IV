import React, { Component } from 'react';
import '../assets/css/About.css';
import Raccoon from '../assets/images/raccoon.png';

class About extends Component {
  render() {
    return (
      <div className="About" id="About" >
        <div className="container">
          <h2><u>ABOUT US</u></h2>
          <div className="image">
            <img src={Raccoon} className="Raccoon" alt="Raccoon" />
          </div>
          <div className="text">
            <div className="info">
              <h3>What we do</h3>
              <p>HackMerced is a 36-hour annual programming competition that occurs at the University of California, Merced and is open to students from all over the world.
              During the event, participants will collaborate in teams and attend workshops to learn about new technologies.
              </p>
            </div>
            <div className="goal">
              <h3>Why we do it</h3>
              <p>We aim to create a collaborative, interdisciplinary event that brings together students from all universities and prospective sponsors to see the innovation and creativity culminating within the San Joaquin Valley.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
