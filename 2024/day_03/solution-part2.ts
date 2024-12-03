import * as fs from 'fs';
const data: string = fs.readFileSync('./data', 'utf-8');

function extractMatches(input: string): string[] {
    const regex = /mul\(\d{1,4},\d{1,4}\)|do\(\)|don't\(\)/g;
    const matches = input.match(regex); 
    return matches || [];
}

const muls = extractMatches(data);
const finalMuls: string[] = [];
const result: number[] = [];
let flag: boolean = true;
for (let mul of muls) {
    if (flag && mul != `don't()` && mul != 'do()') {
       finalMuls.push(mul); 
    }
    if (mul == `don't()`) {
        flag = false;
    }
    if (mul == `do()`) {
        flag = true;
    }
}

for (let op of finalMuls) {     
    const firstNum: number = Number(op.split(',')[0].slice(4));
    const secondNum: number = Number(op.split(',')[1].slice(0, -1));
    const res: number = firstNum * secondNum;
    result.push(res);
}

console.log(result.reduce((a, b) => a + b, 0));