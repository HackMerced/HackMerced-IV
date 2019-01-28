import React, { Component } from 'react';
import '../assets/css/Tracks.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Tracks extends Component {
  render() {
    return (
      <div className="Tracks" id="Tracks">
      <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce="true">
        <div className="container">
          <h2><u>TRACKS</u></h2>
          <div className="theme">
            <i class="fas fa-thumbs-up" style={{fontSize: 40, margin: "20px"}}></i>
            <h3>Social Good</h3>
          </div>
          <div className="theme">
            <i class="fas fa-user-tie" style={{fontSize: 40, margin: "20px"}}></i>
            <h3>Entrepreneurship</h3>
          </div>
          <div className="theme">
            <i class="fab fa-pagelines" style={{fontSize: 40, margin: "20px"}}></i>
            <h3>Agritech</h3>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Tracks;
