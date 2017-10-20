'use strict';

var _config = require('../config.js');var _config2 = _interopRequireDefault(_config);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var async = require('async');var MongoClient = require('mongodb').MongoClient;

var PROD_URI = 'mongodb://' + _config2.default.user + ':' + _config2.default.pass + '@ds117495.mlab.com:17495/urlshortendb';
MongoClient.connect(PROD_URI, function (err, db) {
    if (err) return console.log(err);

});


// let db = async.apply(MongoClient.connect, PROD_URI);


// module.export = function(cb){
//     async.parallel(db, cb);
// }