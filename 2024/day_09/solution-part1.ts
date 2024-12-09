import * as fs from "fs";
const data: string = fs.readFileSync("./data", "utf-8");

const empty: number[] = [];
const blocks: any[] = [];

let isFileBlock = true;
let currentIdNumber = 0;
for (let i = 0; i < data.length; i++) {
  const blockSize = Number(data[i]);
  if (isFileBlock) {
    for (let j = 0; j < blockSize; j++) {
      blocks.push(currentIdNumber);
    }
    currentIdNumber++;
  } else {
    for (let j = 0; j < blockSize; j++) {
      blocks.push(".");
      empty.push(blocks.length - 1);
    }
  }
  isFileBlock = !isFileBlock;
}

let currentFreeSpaceIndex = empty.shift()!;
let currentFileBlockIndex = blocks.length - 1;

while (currentFileBlockIndex > currentFreeSpaceIndex) {
  const block = blocks[currentFileBlockIndex];
  if (block === ".") {
    currentFileBlockIndex--;
    continue;
  }

  blocks[currentFreeSpaceIndex] = blocks[currentFileBlockIndex];
  blocks[currentFileBlockIndex] = ".";
  empty.push(currentFileBlockIndex);

  currentFileBlockIndex--;
  currentFreeSpaceIndex = empty.shift()!;
}

let checkSum = 0;
for (let i = 0; i < blocks.length; i++) {
  if (blocks[i] === ".") {
    break;
  }
  checkSum += i * Number(blocks[i]);
}

console.log(checkSum);
