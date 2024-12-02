"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('./data', 'utf-8');
var reports = data.split('\n');
function isAscending(nums) {
    var isAsc = true;
    for (var i = 0, l = nums.length - 1; i < l; i++) {
        isAsc = isAsc && (nums[i] < nums[i + 1]);
    }
    return isAsc;
}
function isDescending(nums) {
    var isDesc = true;
    for (var i = 0, l = nums.length - 1; i < l; i++) {
        isDesc = isDesc && (nums[i] > nums[i + 1]);
    }
    return isDesc;
}
function checkConditions(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i + 1] && (Math.abs(nums[i + 1] - nums[i]) > 3 || Math.abs(nums[i + 1] - nums[i]) < 1))
            return false;
    }
    if (!isAscending(nums) && !isDescending(nums))
        return false;
    return true;
}
function tryToRemove(nums) {
    var _loop_1 = function (i) {
        var updatedArr = nums.filter(function (self, index) { return index !== i; });
        if (checkConditions(updatedArr))
            return { value: true };
    };
    for (var i = 0; i < nums.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return false;
}
var safeReportsCount = 0;
for (var _i = 0, reports_1 = reports; _i < reports_1.length; _i++) {
    var report = reports_1[_i];
    var nums = report.split(' ').map(function (item) { return Number(item); });
    if (checkConditions(nums)) {
        safeReportsCount++;
    }
    else {
        if (tryToRemove(nums)) {
            safeReportsCount++;
        }
    }
}
console.log(safeReportsCount);
