import React, { Component } from 'react';
import '../assets/css/Schedule.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Schedule = () => (
  <div className="Schedule" id="Schedule" >
  <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce="true">
    <div className="container">
      <h2><u>SCHEDULE</u></h2>
      <div className="days">
        <div className="day friday">
          <table>
            <caption><h3>Friday (March 1st)</h3></caption>
            <tr>
              <td className="time"><p>6pm</p></td>
              <td className="event"><p>Check-in Starts</p></td>
            </tr>
            <tr>
              <td className="time"><p>7pm</p></td>
              <td className="event"><p>Dinner</p></td>
            </tr>
            <tr>
              <td className="time"><p>8pm</p></td>
              <td className="event"><p>Opening Ceremony</p></td>
            </tr>
            <tr>
              <td className="time"><p>9pm</p></td>
              <td className="event"><p>Hacking Begins</p></td>
            </tr>
          </table>
        </div>
        <div className="day saturday">
          <table>
            <caption><h3>Saturday (March 2nd)</h3></caption>
            <tr>
              <td className="time"><p>12am</p></td>
              <td className="event"><p>Midnight Snack</p></td>
            </tr>
            <tr>
              <td className="time"><p>7am</p></td>
              <td className="event"><p>Breakfast</p></td>
            </tr>
            <tr>
              <td className="time"><p>12pm</p></td>
              <td className="event"><p>Lunch</p></td>
            </tr>
            <tr>
              <td className="time"><p>6pm</p></td>
              <td className="event"><p>Dinner</p></td>
            </tr>
          </table>
        </div>
        <div className="day sunday">
          <table>
            <caption><h3>Sunday (March 3rd)</h3></caption>
            <tr>
              <td className="time"><p>12am</p></td>
              <td className="event"><p>Midnight Snack</p></td>
            </tr>
            <tr>
              <td className="time"><p>9am</p></td>
              <td className="event"><p>Breakfast &<br />Hacking Ends</p></td>
            </tr>
            <tr>
              <td className="time"><p>11am</p></td>
              <td className="event"><p>Judging</p></td>
            </tr>
            <tr>
              <td className="time"><p>12pm</p></td>
              <td className="event"><p>Lunch</p></td>
            </tr>
            <tr>
              <td className="time"><p>1pm</p></td>
              <td className="event"><p>Closing Ceremony</p></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    </ScrollAnimation>
  </div>
);

export default Schedule;
