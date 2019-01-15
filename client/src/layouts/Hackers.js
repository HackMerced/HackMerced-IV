import React, { Component } from 'react';
import axios from 'axios';

class Hackers extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      school: '',
      age: '',
      gender: '',
      skills: [],
      interests: [],
      programmingLanguages: [],
      dietaryRestrictions: [],
      allergies: [],
      specialNeeds: '',
      shirtSize: '',
      previousHackathons: 0,
      haveTeam: false,
      teamEmails: [],
      reimbursement: false,
      linkedin: '',
      github: '',
      otherSites: '',
      resume: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { 
      name, 
      email,
      phone,
      school,
      age,
      gender,
      skills,
      interests,
      programmingLanguages,
      dietaryRestrictions,
      allergies,
      specialNeeds,
      shirtSize,
      previousHackathons,
      haveTeam,
      teamEmails,
      reimbursement,
      linkedin,
      github,
      otherSites,
      resume,
  } = this.state;

    axios.post('/api/hacker', {       
      name, 
      email,
      phone,
      school,
      age,
      gender,
      skills,
      interests,
      programmingLanguages,
      dietaryRestrictions,
      allergies,
      specialNeeds,
      shirtSize,
      previousHackathons,
      haveTeam,
      teamEmails,
      reimbursement,
      linkedin,
      github,
      otherSites,
      resume, })
      .then((result) => {
        //access the results here....
      });
  }

  render() {
    const {       
      name, 
      email,
      phone,
      privileges,
      school,
      age,
      gender,
      skills,
      interests,
      programmingLanguages,
      dietaryRestrictions,
      allergies,
      specialNeeds,
      shirtSize,
      previousHackathons,
      haveTeam,
      teamEmails,
      reimbursement,
      linkedin,
      github,
      otherSites,
      resume, } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
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