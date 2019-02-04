import React, { Component } from 'react';
import './assets/css/App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import Tracks from './components/Tracks';
import Faqs from './components/Faqs';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import Hackers from './layouts/Hackers';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Home />
          <Route path='/register' component={Hackers}/>
          <About />
          <Faqs />
          <Sponsors />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
