let async = require('async');
let MongoClient = require('mongodb').MongoClient;
import config from '../config.js';

const PROD_URI = `mongodb://${config.user}:${config.pass}@ds117495.mlab.com:17495/urlshortendb`;
MongoClient.connect(PROD_URI, function(err, db){
    if(err) return console.log(err);
    
});


// let db = async.apply(MongoClient.connect, PROD_URI);


// module.export = function(cb){
//     async.parallel(db, cb);
// }