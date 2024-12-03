import * as fs from 'fs';
const data: string = fs.readFileSync('./data', 'utf-8');

function extractMatches(input: string): string[] {
    const regex = /mul\(\d{1,4},\d{1,4}\)/g;
    const matches = input.match(regex); 
    return matches || [];
}

const muls = extractMatches(data);

const result: number[] = [];

for (let mul of muls) {
    const firstNum: number = Number(mul.split(',')[0].slice(4));
    const secondNum: number = Number(mul.split(',')[1].slice(0, -1));
    const res: number = firstNum * secondNum;
    result.push(res);
}
console.log(result.reduce((a, b) => a + b, 0));