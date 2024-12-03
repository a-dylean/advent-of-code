"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('./data', 'utf-8');
function extractMatches(input) {
    var regex = /mul\(\d{1,4},\d{1,4}\)|do\(\)|don't\(\)/g;
    var matches = input.match(regex);
    return matches || [];
}
var muls = extractMatches(data);
console.log(muls);
var finalMuls = [];
var result = [];
var flag = true;
for (var _i = 0, muls_1 = muls; _i < muls_1.length; _i++) {
    var mul = muls_1[_i];
    if (flag && mul != "don't()" && mul != 'do()') {
        finalMuls.push(mul);
    }
    if (mul == "don't()") {
        flag = false;
    }
    if (mul == "do()") {
        flag = true;
    }
}
console.log(finalMuls);
for (var _a = 0, finalMuls_1 = finalMuls; _a < finalMuls_1.length; _a++) {
    var op = finalMuls_1[_a];
    var firstNum = Number(op.split(',')[0].slice(4));
    var secondNum = Number(op.split(',')[1].slice(0, -1));
    var res = firstNum * secondNum;
    result.push(res);
}
console.log(result.reduce(function (a, b) { return a + b; }, 0));
