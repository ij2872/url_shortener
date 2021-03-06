const express = require('express');
const router = express.Router();
const {generate, decToHex, hexToDec, randomNum} = require('./functions/library');
import config from './config';


// DATABASE CONNECTION
let MongoClient = require('mongodb').MongoClient;

let db;
console.log("info: " + config.user + " " + config.pass);
const PROD_URI = `mongodb://${config.user}:${config.pass}@ds117495.mlab.com:17495/urlshortendb`;
// const DEV_URI = "mongodb://localhost:27017/urlShortDev";
MongoClient.connect(PROD_URI, function(err, database){
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
  let userUrl = req.body.url;
  let strId = 1;
  
  //@TODO Check if shortUrl already exist. If yes, do not create a new instence.
  db.collection('url').find({"url": userUrl}).limit(1).toArray((err, item) =>{
    
    //If url already exist in db
    if(item.length > 0){
      res.json({"shortUrl": item[0].shortUrl});
    } else {
      // Get last saved urls 'shortUrl' id, then add 1 for the new url requested
      db.collection('url').find({}).sort({_id:-1}).limit(1).toArray((err, items) => {
        let lastCreatedIdDec = hexToDec(items[0].shortUrl);
        
        // add a number between 1-5 from the previous id
        strId = decToHex(lastCreatedIdDec + randomNum());
        
        db.collection('url').save({url: userUrl, shortUrl: strId});
        res.json({"shortUrl": strId});
      });
      
    }
    

  });
    


});

module.exports = router;
