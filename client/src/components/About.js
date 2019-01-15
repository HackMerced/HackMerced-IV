import React, { Component } from 'react';
import '../assets/css/About.css';
import Tent from '../assets/images/tent.png';

class About extends Component {
  render() {
    return (
      <div className="About" id="About" >
        <div className="container">
          <div className="image">
            <img src={Tent} className="tent" alt="TENT" />
          </div>
          <div className="text">
            <h2>ABOUT US</h2>
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
