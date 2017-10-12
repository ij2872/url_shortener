const express = require('express');
const router = express.Router();
const {generate} = require('../functions/library');
// const db = require('../functions/contextDb');

let MongoClient = require('mongodb').MongoClient;
import config from '../config.js';

let db;
const PROD_URI = `mongodb://${config.user}:${config.pass}@ds117495.mlab.com:17495/urlshortendb`;
MongoClient.connect(PROD_URI, function(err, database){
    if(err) return console.log(err);
    db = database;
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('API Connected');
});

router.get('/url', function(req, res){
  res.send('Please Provied a url to shorten.');  
});

router.get('/url/:str', function(req, res){
  let str = req.body.str;
  let strId = generate(str);
  db.collection('url').save({url: str, shortenId: strId});
});

// returns {url} JSON from a post request
router.post('/url', function(req, res){
  const result = generate(req.body.url);
  res.send(result);
});

module.exports = router;
