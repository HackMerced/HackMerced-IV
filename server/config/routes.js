const express = require('express');
const router = express.Router();
const mongoDB = require('mongodb');
const schema = require('../models/schema');
const {streamFile} = require('./fileStreaming');

router.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  console.log('api accessed');
  res.send(JSON.stringify({
    success: true, 
    page: 'api'
  }));
});

module.exports = router;