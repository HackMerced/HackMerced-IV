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
  models.Attendees.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newHacker = new Attendees({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        school: req.body.school,
        age: req.body.age,
        gender: req.body.gender,
        skills: req.body.skills,
        interests: req.body.interests,
        programmingLanguages: req.body.programmingLanguages,
        dietaryRestrictions: req.body.dietaryRistrictions,
        allergies: req.body.allergies,
        specialNeeds: req.body.specialNeeds,
        shirtSize: req.body.shirtSize,
        previousHackathons: req.body.previousHackathons,
        haveTeam: req.body.haveTeam,
        teamEmails: req.body.teamEmails,
        reimbursement: req.body.reimbursement,
        linkedin: req.body.linkedin,
        github: req.body.github,
        otherSites: req.body.otherSites,
        resume: req.body.resume,
      });
    }
  })
});

module.exports = router;