import React, { Component } from 'react';
import axios from 'axios';

class Hackers extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      privileges: 'hacker',
      
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { fname, lname, email } = this.state;

    axios.post('/', { fname, lname, email })
      .then((result) => {
        //access the results here....
      });
  }

  render() {
    const { fname, lname, email } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="fname"
          value={fname}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="lname"
          value={lname}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Hackers;