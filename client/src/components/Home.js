import React, { Component } from 'react';
import '../assets/css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home" id="Home">
        <div className="container">
          <div className="content">
            <h1>HackMerced IV</h1>
            <h2>March 1st - 3rd @ UC Merced</h2>
            <a className="Apply button" href='/Hackers'><strong>Apply</strong></a>
            <a className="Volunteer button" href='https://hackmerced1.typeform.com/to/rqqcxV'><strong>Volunteer</strong></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
