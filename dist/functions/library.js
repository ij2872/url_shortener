"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.
decToHex = decToHex;exports.



hexToDec = hexToDec;exports.




randomNum = randomNum;exports.




charToInt = charToInt;exports.







































getRegexStrArray = getRegexStrArray;exports.





encode = encode;exports.











generate = generate;function decToHex(str) {return str.toString(16).toUpperCase();}function hexToDec(str) {return parseInt(str, 16);} // Returns a random number between 1-4
function randomNum() {return Math.floor(Math.random() * 5) + 1;} //Returns int representation of a-zA-Z0-9
function charToInt(char) {//if it's an int, return int
    if (!isNaN(char)) {return char;}char = char.toLowerCase();var conv = { a: "10", b: "11", c: "12", d: "13", e: "14", f: "15", g: "16", h: "17", i: "18", j: "19", k: "20", l: "21", m: "22", n: "23", o: "24", p: "25", q: "26", r: "27", s: "28", t: "29", u: "30", v: "31", w: "32", x: "33", y: "34", z: "35" };return parseInt(conv[char]);}function getRegexStrArray(str) {var re = /[a-zA-Z0-9]/g;var results = str.match(re);return results;}function encode(str) {var modId = 0;var charArray = getRegexStrArray(str);for (var i in charArray) {modId += charToInt(charArray[i]);}return modId.toString();} // Generates url
function generate(url) {return encode(url);}