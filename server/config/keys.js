// Rename this file -- secrets.js -- and fill in the respective URI and secret key
module.exports = {
  secretKey: process.env.secret_key || 'YOUR_MONGO_URI',
  dbUsername: process.env.db_username || 'YOUR_MONGO_USERNAME',
  dbPassword: process.env.db_password || 'YOUR_MONGO_PASSWORD',
};