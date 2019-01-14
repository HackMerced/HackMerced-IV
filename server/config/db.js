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

module.exports.main = mongoose.createConnection(url + '/hackmerced', {useNewUrlParser: true}).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);