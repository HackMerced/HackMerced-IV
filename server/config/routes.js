const express = require('express');
const router = express.Router();
const mongoDB = require('mongodb');
const models = require('../models/schema');
const {streamFile} = require('./fileStreaming');

router.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  console.log('api accessed');
  res.send(JSON.stringify({
    success: true, 
    page: 'api'
  }));
});

router.post("/api/register", (req, res) => {
  Attendees.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newHacker = new Attendees({
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
      });
    }
  })
});




module.exports = router;