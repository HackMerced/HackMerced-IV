const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const api = require('./config/routes');
const port = process.env.port || 3000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, "/../client/build")));
app.use('/api', api);


// Starts the server and tells it to listen on port 3000
app.listen(port, async () => {
  console.log('Server listening on port ' + port);
});