import React, { Component } from 'react';
import '../assets/css/Faqs.css';

class Faqs extends Component {
  render() {
    return (
      <div className="Faqs">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className="container">
          <div className="column left">
            <div className="question">
            <h3>Are there any requirements to attend?</h3>
              <p>As long as you're an undergraduate you're good! Refer to the MLH code of conduct for any uncertainties.</p>
            </div>
            <div className="question">
              <h3>What if I have no coding background?</h3>
              <p>You're still able to attend and compete! Work with a team or ask any one of our volunteers for help!</p>
            </div>
            <div className="question">
              <h3>How do teams work?</h3>
            </div>
            <div className="question">
              <h3>What are the prizes?</h3>
            </div>
          </div>
          <div className="column right">
            <div className="question">
              <h3>How much will it cost me?</h3>
            </div>
            <div className="question">
              <h3>Where can I sleep on campus?</h3>
            </div>
            <div className="question">
              <h3>Is there anything I should bring?</h3>
            </div>
            <div className="question">
              <h3>Is there anything I should bring?</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faqs;
