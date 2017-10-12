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
  let str = req.params.str;

  let strId = generate(str);
  // let dbArray = db.collection('url').find({shortenId: {$eq: strId}});

  db.collection('url').save({_id: strId, url: str });
});

// Returns full url from
router.get('/find/:str', function(req, res){
  let str = req.params.str.toString();
  let result = "";
  db.collection('url').findOne({"_id": str})
      .then(function(data){
        result = data.url;
        console.log(result);
      });

  res.send(result);
});

// returns {url} JSON from a post request
router.post('/url', function(req, res){
  let str = req.body.url;
  let strId = generate(str);

  db.collection('url').save({_id: strId, url: str });
  res.send(202);
});

module.exports = router;
