const express = require('express');
const router = express.Router();
const generate = require('../functions/library');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('API Connected');
});

router.get('/url', function(req, res){
  res.send('Please Provied a url to shorten.');  
});

//
router.post('/url', function(req, res){
  res.send("googlegen");
});

module.exports = router;
