var assert = require('chai').assert;
var request = require('supertest');

const {hexToDec, decToHex, charToInt, getRegexStrArray, encode, generate} = require('../functions/library');
var app = require('../app');


describe('Api', function(){

    it("Api should return API Connected", function(done){
        request(app).get("/api/")
            .expect("API Connected", done);
    });

    it("Returns a error message at /api/url/ ", function(done){
        request(app).get("/api/url")
            .expect("Please send a POST to /api/url with a {url} to shorten", done);
    });

    // it("should return the same string", function(done){
    //     request(app).post("/api/url")
    //         .send({url: "aaa"})
    //         .expect("30", done);
    // });

    // it("/find/:id_66282718335233216_https://www.youtube.com/watch?v=yWB8RI3ZNWg", function(done){
    //     request(app).get("/api/find/66282718335233216")
    //         .expect("https://www.youtube.com/watch?v=yWB8RI3ZNWg", done);
    // });
});


describe("URL-Generator", function(){
    it("charToInt_0_0", function(done){
        let result = charToInt(0);
        assert.equal(result, "0");
        done();
    });

    it("charToInt_d_13", function(done){
        let result = charToInt('d');
        assert.equal(result, "13");
        done();
    });

    it("getRegexStrArray_te.st_test", function(done){
        let result = "";
        let resultArr = getRegexStrArray("te.st");
        for(let i in resultArr){
            result += resultArr[i];
        }
        assert.equal(result, "test");
        done();
    });

    it("encode'youtube'_172", function(done){
        let result = encode("youtube");
        assert.equal(result, '172');
        done();
    });

    it("encode'aaa'_30", function(done){
        let result = encode("aaa");
        assert.equal(result, '30');
        done();
    });

    it("generate_''_0", function(done){
        let result = generate("");
        assert.equal(result, '0');
        done();
    });

    it("generate_'youtube'_172", function(done){
        let result = generate("youtube");
        assert.equal(result, '172');
        done();
    });

    it("generate_'aaa'_30", function(done){
        let result = generate("aaa");
        assert.equal(result, '30');
        done();
    });

    it("decToHex_256_100", function(done){
        let result = decToHex(256);
        assert.equal(result, '100');
        done();
    });
    
    it("decToHex_335246_51D8E", function(done){
        let result = decToHex(335246);
        assert.equal(result, '51D8E');
        done();
    });

});
