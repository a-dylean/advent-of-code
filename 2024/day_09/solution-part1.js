"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync("./data", "utf-8");
var empty = [];
var blocks = [];
var isFileBlock = true;
var currentIdNumber = 0;
for (var i = 0; i < data.length; i++) {
    var blockSize = Number(data[i]);
    if (isFileBlock) {
        for (var j = 0; j < blockSize; j++) {
            blocks.push(currentIdNumber);
        }
        currentIdNumber++;
    }
    else {
        for (var j = 0; j < blockSize; j++) {
            blocks.push(".");
            empty.push(blocks.length - 1);
        }
    }
    isFileBlock = !isFileBlock;
}
var currentFreeSpaceIndex = empty.shift();
var currentFileBlockIndex = blocks.length - 1;
while (currentFileBlockIndex > currentFreeSpaceIndex) {
    var block = blocks[currentFileBlockIndex];
    if (block === ".") {
        currentFileBlockIndex--;
        continue;
    }
    blocks[currentFreeSpaceIndex] = blocks[currentFileBlockIndex];
    blocks[currentFileBlockIndex] = ".";
    empty.push(currentFileBlockIndex);
    currentFileBlockIndex--;
    currentFreeSpaceIndex = empty.shift();
}
var checkSum = 0;
for (var i = 0; i < blocks.length; i++) {
    if (blocks[i] === ".") {
        break;
    }
    checkSum += i * Number(blocks[i]);
}
console.log(checkSum);
