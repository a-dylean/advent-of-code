"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('./data', 'utf-8');
function extractMatches(input) {
    var regex = /mul\(\d{1,4},\d{1,4}\)/g; // 'g' flag to find all matches
    var matches = input.match(regex);
    return matches || []; // Return matches or an empty array if none are found
}
var muls = extractMatches(data);
var result = [];
for (var _i = 0, muls_1 = muls; _i < muls_1.length; _i++) {
    var mul = muls_1[_i];
    var firstNum = Number(mul.split(',')[0].slice(4));
    var secondNum = Number(mul.split(',')[1].slice(0, -1));
    var res = firstNum * secondNum;
    result.push(res);
}
console.log(result.reduce(function (a, b) { return a + b; }, 0));
