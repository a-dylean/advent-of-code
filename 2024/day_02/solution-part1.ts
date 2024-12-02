import * as fs from 'fs';
const data = fs.readFileSync('./data', 'utf-8');
const reports : string[] = data.split('\n');

function isAscending(nums: number[]): boolean {
    let isAsc = true;
    for (let i: number = 0, l = nums.length - 1; i < l; i++) {
        isAsc = isAsc && (nums[i] < nums[i+1]);
    }
    return isAsc;
}

function isDescending(nums: number[]): boolean {
    let isDesc = true;
    for (let i: number = 0, l = nums.length - 1; i < l; i++) {
        isDesc = isDesc && (nums[i] > nums[i+1]);
    }
    return isDesc;
}

function checkConditions(report : string): boolean {
    const nums = report.split(' ').map(item => Number(item));
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i + 1] && (Math.abs(nums[i + 1] - nums[i]) > 3 || Math.abs(nums[i + 1] - nums[i]) < 1))
            return false;
    }
    if (!isAscending(nums) && !isDescending(nums))
        return false;
    return true;
}

let count: number = 0;
for (let report of reports) {
    if (checkConditions(report)) {
        count++;
    }
}
console.log(count);