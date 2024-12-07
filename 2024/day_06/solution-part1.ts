import * as fs from "fs";
const data: string = fs.readFileSync("./data", "utf-8");
const lines: string[][] = data.split("\n").map((line) => line.split(""));

function getPos(map: string[][]): number[] {
  let i = 0,
    j = 0;
  for (i = 0; i < map.length; i++) {
    for (j = 0; j < map[i].length; j++) {
      if (map[i][j] == "^") return [i, j];
    }
  }
  return [0, 0];
}

function getCount(lines, i, j, count, finish, dir) {
  let result;
  if (finish) return count;
  result = calculateCount(lines, dir, i, j, count);
  count += result.count;
  getCount(lines, result.i, result.j, result.count, result.finish, result.newDir);
}

function calculateCount(lines, dir, i, j, count) {
  let finish: boolean = false;
  let newDir;
  if (dir == "^") {
    newDir = ">";
    while (lines[i - 1][j] != "#") {
      lines[i][j] = "X";
      i--;
      count++;
      if (!lines[i - 1]) {
        finish = true;
        break;
      }
    }
  }
  if (dir == ">") {
    newDir = "v";
    while (lines[i][j + 1] != "#") {
      lines[i][j] = "X";
      j++;
      count++;
      if (!lines[i][j + 1]) {
        finish = true;
        break;
      }
    }
  }
  if (dir == "v") {
    newDir = "<";
    while (lines[i + 1][j] != "#") {
      lines[i][j] = "X";
      i++;
      count++;
      if (!lines[i + 1]) {
        finish = true;
        break;
      }
    }
  }
  if (dir == "<") {
    newDir = "^";
    while (lines[i][j - 1] != "#") {
      lines[i][j] = "X";
      j--;
      count++;
      if (!lines[i][j - 1]) {
        finish = true;
        break;
      }
    }
  }
  return { i, j, count, finish, newDir };
}

console.log(getCount(lines, getPos(lines)[0], getPos(lines)[1], 0, false, '^'));

let sum = 1;
for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines[i].length; j++) {
    if (lines[i][j] == "X")
      sum++;
  }
}

console.log(sum)
