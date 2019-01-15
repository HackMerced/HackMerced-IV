const mongoose = require("mongoose");
const {
  dbUsername,
  dbPassword
} = require('./secrets');
const url = 'mongodb+srv://' + dbUsername + ':' + dbPassword + '@hackmerced-1za3e.mongodb.net';
/*
 * for local testing
 * const url = 'mongodb://localhost:27017/';
 */

module.exports.hackmerced = mongoose.createConnection(url + '/hackmerced', {useNewUrlParser: true}).then(
  () => {
    console.log("Database connection to hackmerced has been established!");
  },
  err => {
    console.log("Error connecting hackmerced database instance due to: ", err);
  }
);
module.exports.resources = mongoose.createConnection(url + '/resources', {useNewUrlParser: true}).then(
  () => {
    console.log("Database connection to resources has been established!");
  },
  err => {
    console.log("Error connecting resources database instance due to: ", err);
  }
);
