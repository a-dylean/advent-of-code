import * as fs from "fs";
const data: string = fs.readFileSync("./data_example", "utf-8");
// const data = "12345";
console.log(data)

// interface File {
//     id: number;
//     value: number;
// }
let files: number[] = [];
let empty: number[] = [];

for (let i = -1; i < data.length; i++) {
    i++;
    files.push(Number(data.charAt(i)));
}
for (let i = 0; i < data.length; i++) {
    i++;
    empty.push(Number(data.charAt(i)));
}
const newFiles = files.map((value, index) => index.toString().repeat(value));
const newEmpty = empty.map((value) => '.'.repeat(value));

const interleaved: (number | string)[] = [];
const maxLength = Math.max(newFiles.length, newEmpty.length);

for (let i = 0; i < maxLength; i++) {
  if (i < newFiles.length) interleaved.push(newFiles[i]);
  if (i < newEmpty.length) interleaved.push(newEmpty[i]);
}
let result = [...interleaved.join('')]

for (let i = 0; i < result.length; i++) {
    if (result[i] == '0') continue;
    if (result[i] == '.') {
        result[i] = result[result.length - i]
    }
}
console.log(newFiles);
console.log(result)