var express = require('express');
var router = express.Router();

// DATABASE CONNECTION
let MongoClient = require('mongodb').MongoClient;
import config from './config';

let db;
const PROD_URI = `mongodb://${config.user}:${config.pass}@ds117495.mlab.com:17495/urlshortendb`;
// const DEV_URI = "mongodb://localhost:27017/urlShortDev";
MongoClient.connect(PROD_URI, function(err, database){
    if(err) return console.log(err);
    db = database;
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res){
  let userShortUrlId = req.params.id.toString();
  console.log(userShortUrlId);
    db.collection('url').find({"shortUrl": userShortUrlId}).toArray().then((result) =>{
      console.log(result[0].url);
      res.redirect(result[0].url);
    })
    .catch((e) => {
      console.log(e);
      res.send("No Link Found");
    });
});

module.exports = router;
