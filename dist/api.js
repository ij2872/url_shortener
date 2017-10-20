'use strict';


var _config = require('./config');var _config2 = _interopRequireDefault(_config);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var express = require('express');var router = express.Router();var _require = require('./functions/library'),generate = _require.generate,decToHex = _require.decToHex,hexToDec = _require.hexToDec,randomNum = _require.randomNum;


// DATABASE CONNECTION
var MongoClient = require('mongodb').MongoClient;

var db = void 0;
console.log("info: " + _config2.default.user + " " + _config2.default.pass);
var PROD_URI = 'mongodb://' + _config2.default.user + ':' + _config2.default.pass + '@ds117495.mlab.com:17495/urlshortendb';
// const DEV_URI = "mongodb://localhost:27017/urlShortDev";
MongoClient.connect(PROD_URI, function (err, database) {
  if (err) return console.log(err);
  db = database;
});


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('API Connected');
});

router.get('/url', function (req, res) {
  res.send('Please send a POST to /api/url with a {url} to shorten');
});

// Creates _id and url for Db
// returns {url} JSON from a post request
router.post('/url', function (req, res) {
  var userUrl = req.body.url;
  var strId = 1;

  //@TODO Check if shortUrl already exist. If yes, do not create a new instence.
  db.collection('url').find({ "url": userUrl }).limit(1).toArray(function (err, item) {

    //If url already exist in db
    if (item.length > 0) {
      res.json({ "shortUrl": item[0].shortUrl });
    } else {
      // Get last saved urls 'shortUrl' id, then add 1 for the new url requested
      db.collection('url').find({}).sort({ _id: -1 }).limit(1).toArray(function (err, items) {
        var lastCreatedIdDec = hexToDec(items[0].shortUrl);

        // add a number between 1-5 from the previous id
        strId = decToHex(lastCreatedIdDec + randomNum());

        db.collection('url').save({ url: userUrl, shortUrl: strId });
        res.json({ "shortUrl": strId });
      });

    }


  });



});

module.exports = router;