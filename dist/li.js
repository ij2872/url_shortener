'use strict';




var _config = require('./config');var _config2 = _interopRequireDefault(_config);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var express = require('express');var router = express.Router(); // DATABASE CONNECTION
var MongoClient = require('mongodb').MongoClient;
var db = void 0;
var PROD_URI = 'mongodb://' + _config2.default.user + ':' + _config2.default.pass + '@ds117495.mlab.com:17495/urlshortendb';
// const DEV_URI = "mongodb://localhost:27017/urlShortDev";
MongoClient.connect(PROD_URI, function (err, database) {
  if (err) return console.log(err);
  db = database;
});


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function (req, res) {
  var userShortUrlId = req.params.id.toString();
  console.log(userShortUrlId);
  db.collection('url').find({ "shortUrl": userShortUrlId }).toArray().then(function (result) {
    console.log(result[0].url);
    res.redirect(result[0].url);
  }).
  catch(function (e) {
    console.log(e);
    res.send("No Link Found");
  });
});

module.exports = router;