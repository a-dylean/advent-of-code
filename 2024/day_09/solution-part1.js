"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
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
var data = fs.readFileSync("./data_example", "utf-8");
// const data = "12345";
console.log(data);
// interface File {
//     id: number;
//     value: number;
// }
var files = [];
var empty = [];
for (var i = -1; i < data.length; i++) {
    i++;
    files.push(Number(data.charAt(i)));
}
for (var i = 0; i < data.length; i++) {
    i++;
    empty.push(Number(data.charAt(i)));
}
var newFiles = files.map(function (value, index) { return index.toString().repeat(value); });
var newEmpty = empty.map(function (value) { return '.'.repeat(value); });
var interleaved = [];
var maxLength = Math.max(newFiles.length, newEmpty.length);
for (var i = 0; i < maxLength; i++) {
    if (i < newFiles.length)
        interleaved.push(newFiles[i]);
    if (i < newEmpty.length)
        interleaved.push(newEmpty[i]);
}
var result = __spreadArray([], __read(interleaved.join('')), false);
for (var i = 0; i < result.length; i++) {
    if (result[i] == '0')
        continue;
    if (result[i] == '.') {
        result[i] = result[result.length - i];
    }
}
console.log(newFiles);
console.log(result);
