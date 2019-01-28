import React, { Component } from 'react';
import './assets/css/App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import Tracks from './components/Tracks';
import Faqs from './components/Faqs';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <About />
        <Schedule />
        <Tracks />
        <Faqs />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default App;
