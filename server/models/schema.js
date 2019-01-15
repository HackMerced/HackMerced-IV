'use strict';

const mongoose = require('mongoose');
const db = require('../config/db').hackmerced;

// Attendees
const attendeeSchema = new mongoose.Schema({
  email: {
    type: String,
    index: {
      unique: true,
    },
    validate: {
      validator(e) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
      },
      message: '{VALUE} is not a valid email!'
    },
    required: [true, 'User email required']
  },
  phone: {
    type: String,
    required: [true, 'User phone number required']
  },
  privileges: {
    type: String,
    required: [true, 'User privileges required']
  },
  qr: {
    type: String,
    index: {
        unique: true,
        sparse: true
    },
},
}, {
  discriminatorKey: 'type',
  collection: 'users',
  timestamps: {
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  }
});

const Attendees = mongoose.model('Attendees', attendeeSchema, 'attendees');

// Hackers
const Hackers = Attendees.discriminator('hacker', new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator(e) {
        return e.length > 2;
      },
      message: '{VALUE} is not valid. Please enter your full name.'
    },
    required: [true, 'Full name required']
  },
  school: {
    type: String,
    required: [true, 'School required']
  },
  age: {
    type: Number,
    required: [true, 'Age required']
  },
  gender: {
    type: String,
    required: [true, 'Gender required']
  },
  skills: [String],
  interests: [String],
  programmingLanguages: [String],
  dietaryRestrictions: [String],
  allergies: [String],
  specialNeeds: String,
  shirtSize: {
    type: String,
    required: [true, 'Shirt size required']
  },
  previousHackathons: {
    type: Number,
    required: [true, 'Number of previous hackathons required']
  },
  haveTeam: {
    type: Boolean,
    required: [true, 'Please specify if you have a team']
  },
  teamEmails: [String],
  reimbursement: {
    type: Boolean,
    required: [true, 'Please specify if you require reimbursement']
  },
  linkedin: String,
  github: String,
  otherSites: String,
  resume: String,
  applicationStatus: {
    type: String,
    default: 'submitted',
    enum: ['submitted', 'accepted', 'declined', 'waitListed', 'checkedIn'],
    required: [true, 'Application status required']
  }
}, {
  collection: 'attendees'
}));

// Judges
const Judges = Attendees.discriminator('judge', new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator(e) {
        return e.length > 2;
      },
      message: '{VALUE} is not valid. Please enter your full name.'
    },
    required: [true, 'Full name required']
  },
  title: String,
  shirtSize: {
    type: String,
    required: [true, 'Shirt size required']
  },
  occupation: String,
  position: String,
  organization: String,
  linkedin: String,
  otherSites: String
}, {
  collection: 'attendees'
}));

// Volunteers
const Volunteers = Attendees.discriminator('volunteer', new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator(e) {
        return e.length > 2;
      },
      message: '{VALUE} is not valid. Please enter your full name.'
    },
    required: [true, 'Full name required']
  },
  position: String,
  previousExperience: String,
  age: {
    type: Number,
    required: [true, 'Age required']
  },
  shirtSize: {
    type: String,
    required: [true, 'Shirt size required']
  },
  availability: {
    type: [[Date]],
    required: [true, 'Availability required']
  },
  hours: [[Date]],
  applicationStatus: {
    type: String,
    default: 'submitted',
    enum: ['submitted', 'accepted', 'checkedIn', 'waitListed'],
    required: [true, 'Application status required']
  }
}, {
  collection: 'attendees'
}));

// Sponsors
const Sponsors = Attendees.discriminator('sponsor', new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator(e) {
        return e.length > 2;
      },
      message: '{VALUE} is not valid. Please enter your full name.'
    },
    required: [true, 'Full name required']
  },
  organization: {
    type: String,
    required: [true, 'Organization required']
  },
  position: String,
  linkedin: String,
  otherSites: String,
  logo: String,
}, {
  collection: 'attendees'
}));

// HackMerced Team
const HackMerced = Attendees.discriminator('hackmerced', new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator(e) {
        return e.length > 2;
      },
      message: '{VALUE} is not valid. Please enter your full name.'
    },
    required: [true, 'Full name required']
  },
  shirtSize: {
    type: String,
    required: [true, 'Shirt size required']
  }
}, {
  collection: 'attendees'
}));

// Teams
const teamSchema = new mongoose.Schema({
  projectName: String,
  projectDescription: String,
  members: {
    type: [String],
    validate: {
      validator(e) {
        return e.length > 2;
      },
      message: '{VALUE} is not valid. Please enter each member\'s name.'
    }
  },
  emails: {
    type: [String],
    validate: {
      validator(e) {
        return e.length > 1;
      },
      message: '{VALUE} is not valid. Please enter each member\'s email.'
    }
  },
  github: String,
  devpost: String
}, {
  collection: 'teams',
  timestamps: {
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  }
});

const Teams = mongoose.model('Teams', teamSchema, 'teams');

const models = {
  Attendees: Attendees,
  Hackers: Hackers,
  Judges: Judges,
  Volunteers: Volunteers,
  Sponsors: Sponsors,
  HackMerced: HackMerced,
  Teams: Teams
};

module.exports = models;