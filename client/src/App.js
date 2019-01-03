import React, { Component } from 'react';
import './assets/css/App.css';

import Home from './components/Home';
import About from './components/About';
import Faqs from './components/Faqs';
import Sponsors from './components/Sponsors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Faqs />
        <Sponsors />
      </div>
    );
  }
}

export default App;
