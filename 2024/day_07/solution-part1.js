"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync("./data", "utf-8");
var input = data.split("\n").map(function (rule) { return rule.split(":"); });
var board = new Map();
for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
    var _a = input_1[_i], number = _a[0], rule = _a[1];
    var value = rule.split(" ");
    var finalValue = value.filter(function (item) { return item; });
    board.set(Number(number), __spreadArray([], finalValue.map(Number), true));
}
function calculate(expression) {
    var tokens = expression.match(/(\d+|\+|\*)/g);
    var result = parseInt(tokens[0], 10);
    for (var i = 1; i < tokens.length; i += 2) {
        var operator = tokens[i];
        var nextNumber = parseInt(tokens[i + 1], 10);
        if (operator === "+") {
            result += nextNumber;
        }
        else if (operator === "*") {
            result *= nextNumber;
        }
    }
    return result;
}
function createExpressions(values) {
    if (values.length === 0)
        return [];
    if (values.length === 1)
        return [values[0].toString()];
    function generate(index, currentExpression) {
        if (index === values.length) {
            results.push(currentExpression.join(""));
            return;
        }
        currentExpression.push("+", values[index]);
        generate(index + 1, currentExpression);
        currentExpression.pop();
        currentExpression.pop();
        currentExpression.push("*", values[index]);
        generate(index + 1, currentExpression);
        currentExpression.pop();
        currentExpression.pop();
    }
    var results = [];
    generate(1, [values[0]]);
    return results;
}
function checkEquation(key, value) {
    var expressions = createExpressions(value);
    for (var _i = 0, expressions_1 = expressions; _i < expressions_1.length; _i++) {
        var expression = expressions_1[_i];
        if (calculate(expression) == key)
            return true;
    }
    return false;
}
var trueEquations = [];
board.forEach(function (value, key) {
    if (checkEquation(key, value))
        trueEquations.push(key);
});
console.log(trueEquations.reduce(function (a, b) { return a + b; }, 0));
