import React, { Component } from 'react';
import '../assets/css/Tracks.css';

class Tracks extends Component {
  render() {
    return (
      <div className="Tracks" id="Tracks" >
        <div className="container">
          <h2><u>TRACKS</u></h2>
          <div className="theme">
            <i class="fas fa-thumbs-up" style={{fontSize: 30, margin: "10px"}}></i>
            <h3>Social Good</h3>
          </div>
          <div className="theme">
            <i class="fas fa-user-tie" style={{fontSize: 30, margin: "10px"}}></i>
            <h3>Entrepreneurship</h3>
          </div>
          <div className="theme">
            <i class="fab fa-pagelines" style={{fontSize: 30, margin: "10px"}}></i>
            <h3>Agritech</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Tracks;
