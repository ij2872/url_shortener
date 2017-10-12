var assert = require('chai').assert;
var request = require('supertest');

const g = require('../functions/library.js');
var app = require('../app');


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
            .send({url: "aaa"})
            .expect("30", done);
    });
});


describe("URL-Generator", function(){
    
    it("generate('aaa') Expected 30", function(){
        let result = g("aaa");
        assert.equal(result, '30');
    });
});
