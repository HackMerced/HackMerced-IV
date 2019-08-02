import React from "react";
import "../assets/css/Home.css";
import ScrollAnimation from "react-animate-on-scroll";

const Home = () => (
  <div className="Home" id="Home">
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
      <div className="container bg">
        <div className="content">
          <ScrollAnimation
            animateIn="fadeInDown"
            delay={1000}
            duration={0.5}
            animateOnce={true}
          >
            <h1>HackMerced IV</h1>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInDown"
            delay={1500}
            animateOnce={true}
          >
            <h2>March 1st - 3rd @ UC Merced</h2>
          </ScrollAnimation>
        </div>
      </div>
    </ScrollAnimation>
  </div>
);

export default Home;
