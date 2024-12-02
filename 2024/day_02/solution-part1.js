"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('./data', 'utf-8');
var reports = data.split('\n');
function isAscending(nums) {
    var count = 0;
    var isAsc = true;
    for (var i = 0, l = nums.length - 1; i < l; i++) {
        // if (nums[i + 1] && (nums[i + 1] < nums[i + 1]))
        //     break;
        // count++;
        isAsc = isAsc && (nums[i] < nums[i + 1]);
    }
    console.log("".concat(nums, ": ").concat(isAsc));
    return isAsc;
}
function isDescending(nums) {
    var count = 0;
    var isDesc = true;
    for (var i = 0, l = nums.length - 1; i < l; i++) {
        // if (nums[i + 1] && (nums[i + 1] > nums[i + 1]))
        //     break;
        // count++;
        isDesc = isDesc && (nums[i] > nums[i + 1]);
    }
    console.log("".concat(nums, ": ").concat(isDesc));
    return isDesc;
}
function checkConditions(report) {
    var nums = report.split(' ').map(function (item) { return Number(item); });
    console.log(nums);
    for (var i = 0; i < nums.length; i++) {
        if (nums[i + 1] && (Math.abs(nums[i + 1] - nums[i]) > 3 || Math.abs(nums[i + 1] - nums[i]) < 1))
            return false;
    }
    if (!isAscending(nums) && !isDescending(nums))
        return false;
    return true;
}
var count = 0;
for (var _i = 0, reports_1 = reports; _i < reports_1.length; _i++) {
    var report = reports_1[_i];
    if (checkConditions(report)) {
        count++;
    }
}
console.log(count);
