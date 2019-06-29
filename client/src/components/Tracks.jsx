import React from "react";
import "../assets/css/Tracks.css";
import ScrollAnimation from "react-animate-on-scroll";

const Tracks = () => (
  <div className="Tracks" id="Tracks">
    <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
      <div className="container">
        <h2>
          <u>TRACKS</u>
        </h2>
        <div className="info">
          <p>
            This year, we're working with our top sponsors to present three
            themes that participants can build a project towards to win some
            great prizes!
          </p>
        </div>
        <div className="theme">
          <i
            className="fas fa-people-carry"
            style={{ fontSize: 80, margin: "20px", color: "#2980B9" }}
          />
          <h3>Social Good</h3>
        </div>
        <div className="theme">
          <i
            className="fas fa-user-tie"
            style={{ fontSize: 80, margin: "20px", color: "#ECF0F1" }}
          />
          <h3>Entrepreneurship</h3>
        </div>
        <div className="theme">
          <i
            className="fab fa-pagelines"
            style={{ fontSize: 80, margin: "20px", color: "#2ECC71" }}
          />
          <h3>AgFoodTech</h3>
        </div>
      </div>
    </ScrollAnimation>
  </div>
);

export default Tracks;
