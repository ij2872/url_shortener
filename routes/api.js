const express = require('express');
const router = express.Router();
const {generate} = require('../functions/library');
// const db = require('../functions/contextDb');



// DATABASE CONNECTION
let MongoClient = require('mongodb').MongoClient;
// import config from '../config.js';

let db;
// const PROD_URI = `mongodb://${config.user}:${config.pass}@ds117495.mlab.com:17495/urlshortendb`;
const DEV_URI = "mongodb://localhost:27017/urlShortDev";
MongoClient.connect(DEV_URI, function(err, database){
    if(err) return console.log(err);
    db = database;
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('API Connected');
});

router.get('/url', function(req, res){
  res.send('Please send a POST to /api/url with a {url} to shorten');  
});

// Creates _id and url for Db
// returns {url} JSON from a post request
router.post('/url', function(req, res){
  let str = req.body.url;
  let strId = generate(str);

  db.collection('url').save({_id: strId, url: str });
  res.json({"shortUrl": strId});
});

module.exports = router;
