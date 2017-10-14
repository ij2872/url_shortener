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

// router.get('/url/:str', function(req, res){
//   let str = req.params.str;

//   let strId = generate(str);
//   // let dbArray = db.collection('url').find({shortenId: {$eq: strId}});

//   db.collection('url').save({_id: strId, url: str });
// });

// Returns full url from
router.get('/find/:id', function(req, res){
  let str = req.params.id.toString();
  let result = null;
  result = db.collection('url').findOne({"_id": str})
              .then(function(data){
                return data.url;
              });

  // Fulfill promise
  result
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.log("Error: " + e);
      res.send("No Link Found");
    });
});

// Creates _id and url for Db
// returns {url} JSON from a post request
router.post('/url', function(req, res){
  let str = req.body.url;
  let strId = generate(str);

  // db.collection('url').save({_id: strId, url: str });
  console.log("String is: " + str);
  res.json({"shortUrl": strId});
});

module.exports = router;
