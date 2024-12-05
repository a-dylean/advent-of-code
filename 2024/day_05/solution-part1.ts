import * as fs from 'fs';
const data: string = fs.readFileSync('./data', 'utf-8');
const [allRules, allNumbers] = data.split(/\n\s*\n/);
const rulesNumbers = allRules.split('\n').map((rule) => rule.split('|').map((number) => parseInt(number)));
const arrs = allNumbers.split('\n').map((print) => print.split(',').map((number) => parseInt(number)));
// console.log(rulesNumbers);
// console.log(arrs);
const rules = new Map();

for (const [number, rule] of rulesNumbers) {
	if (rules.has(number)) rules.set(number, rules.get(number).concat(rule));
	else rules.set(number, [rule]);
}

let result = 0;
for (const arr of arrs) {
	let arrFail = false;

	for (const index in arr) {
		const number = arr[index];
		if (!rules.has(number)) 
            continue;
		const rule = rules.get(number);
		for (const value of rule) {
			const valueIndex = arr.indexOf(value);
			if (valueIndex === -1) 
                continue;
			if (Number(index) > valueIndex) {
                arrFail = true;
                break;
            }     
		}
	}

	if (!arrFail) 
        result += arr[Math.floor(arr.length / 2)];
}

console.log(result);