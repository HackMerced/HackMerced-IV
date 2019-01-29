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
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="school"
          value={school}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="age"
          value={age}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="gender"
          value={gender}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="skills"
          value={skills}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="interests"
          value={interests}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="programmingLanguages"
          value={programmingLanguages}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="dietaryRestrictions"
          value={dietaryRestrictions}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="allergies"
          value={allergies}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="specialNeeds"
          value={specialNeeds}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="shirtSize"
          value={shirtSize}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="previousHackathons"
          value={previousHackathons}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="haveTeam"
          value={haveTeam}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="teamEmails"
          value={teamEmails}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="reimbursement"
          value={reimbursement}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="linkedin"
          value={linkedin}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="github"
          value={github}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="otherSites"
          value={otherSites}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="resume"
          value={resume}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Hackers;