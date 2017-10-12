var request = require('supertest');
var app = require('../app');
var assert = require('chai').assert;


describe('Api', function(){

    it("Api should return API Connected", function(done){
        request(app).get("/api/")
            .expect("API Connected", done);
    });

    it("Returns a error message at /api/url/ ", function(done){
        request(app).get("/api/url")
            .expect("Please Provied a url to shorten.", done);
    });

    it("should return the same string", function(done){
        request(app).post("/api/url")
            .send({url: "google"})
            .expect("googlegen", done);
    });
});
