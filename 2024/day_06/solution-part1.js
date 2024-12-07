"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync("./data", "utf-8");
var lines = data.split("\n").map(function (line) { return line.split(""); });
function getPos(map) {
    var i = 0, j = 0;
    for (i = 0; i < map.length; i++) {
        for (j = 0; j < map[i].length; j++) {
            if (map[i][j] == "^")
                return [i, j];
        }
    }
    return [0, 0];
}
function calculateCount(lines, dir, i, j) {
    var finish = false;
    var newDir;
    if (dir == "^") {
        newDir = ">";
        while (lines[i - 1][j] != "#") {
            lines[i][j] = "X";
            i--;
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
            if (!lines[i][j - 1]) {
                finish = true;
                break;
            }
        }
    }
    return { i: i, j: j, finish: finish, newDir: newDir };
}
function createRoute(lines, i, j, finish, dir) {
    var result;
    if (finish)
        return;
    result = calculateCount(lines, dir, i, j);
    createRoute(lines, result.i, result.j, result.finish, result.newDir);
}
createRoute(lines, getPos(lines)[0], getPos(lines)[1], false, "^");
var sum = 1;
for (var i = 0; i < lines.length; i++) {
    for (var j = 0; j < lines[i].length; j++) {
        if (lines[i][j] == "X")
            sum++;
    }
}
console.log(sum);
