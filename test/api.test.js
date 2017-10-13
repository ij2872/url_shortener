var assert = require('chai').assert;
var request = require('supertest');

const {charToInt, getRegexStrArray, encode, generate} = require('../functions/library');
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

    // it("should return the same string", function(done){
    //     request(app).post("/api/url")
    //         .send({url: "aaa"})
    //         .expect("30", done);
    // });

    it("/find/:id_66282718335233216_https://www.youtube.com/watch?v=yWB8RI3ZNWg", function(done){
        request(app).get("/api/find/66282718335233216")
            .expect("https://www.youtube.com/watch?v=yWB8RI3ZNWg", done);
    });
});


describe("URL-Generator", function(){
    it("charToInt_0_0", function(){
        let result = charToInt(0);
        assert.equal(result, "0");
    });

    it("charToInt_d_13", function(){
        let result = charToInt('d');
        assert.equal(result, "13");
    });

    it("getRegexStrArray_te.st_test", function(){
        let result = "";
        let resultArr = getRegexStrArray("te.st");
        for(let i in resultArr){
            result += resultArr[i];
        }
        assert.equal(result, "test");
    });

    it("encode'youtube'_172", function(){
        let result = encode("youtube");
        assert.equal(result, '172');
    });

    it("encode'aaa'_30", function(){
        let result = encode("aaa");
        assert.equal(result, '30');
    });

    it("generate_''_0", function(){
        let result = generate("");
        assert.equal(result, '0');
    });

    it("generate_'youtube'_172", function(){
        let result = generate("youtube");
        assert.equal(result, '172');
    });

    it("generate_'aaa'_30", function(){
        let result = generate("aaa");
        assert.equal(result, '30');
    });
});
