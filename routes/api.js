const express = require('express');
const router = express.Router();
const {generate} = require('../functions/library');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('API Connected');
});

router.get('/url', function(req, res){
  res.send('Please Provied a url to shorten.');  
});

// returns {url} JSON from a post request
router.post('/url', function(req, res){
  const result = generate(req.body.url);
  res.send(result);
});

module.exports = router;
