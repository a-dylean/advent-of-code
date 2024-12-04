"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('./data', 'utf-8');
var rows = data.split('\n');
var map = [];
var count = 0;
for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
    var row = rows_1[_i];
    map.push(row.split(''));
}
for (var y = 0; y < map.length; y++) {
    for (var x = 0; x < map[y].length; x++) {
        if (map[y][x] == 'X') {
            if (map[y][x + 1] && map[y][x + 2] && map[y][x + 3] && map[y][x + 1] == 'M' && map[y][x + 2] == 'A' && map[y][x + 3] == 'S') {
                count++;
            }
            if (map[y + 1] && map[y + 2] && map[y + 3] && map[y + 1][x] == 'M' && map[y + 2][x] == 'A' && map[y + 3][x] == 'S') {
                count++;
            }
            if (map[y - 1] && map[y - 2] && map[y - 3] && map[y - 1][x] == 'M' && map[y - 2][x] == 'A' && map[y - 3][x] == 'S') {
                count++;
            }
            if (map[y][x - 1] && map[y][x - 2] && map[y][x - 3] && map[y][x - 1] == 'M' && map[y][x - 2] == 'A' && map[y][x - 3] == 'S') {
                count++;
            }
            if (map[y + 1] && map[y + 2] && map[y + 3] && map[y + 1][x + 1] && map[y + 2][x + 2] && map[y + 3][x + 3] && map[y + 1][x + 1] == 'M' && map[y + 2][x + 2] == 'A' && map[y + 3][x + 3] == 'S') {
                count++;
            }
            if (map[y - 1] && map[y - 2] && map[y - 3] && map[y - 1][x - 1] && map[y - 2][x - 2] && map[y - 3][x - 3] && map[y - 1][x - 1] == 'M' && map[y - 2][x - 2] == 'A' && map[y - 3][x - 3] == 'S') {
                count++;
            }
            if (map[y - 1] && map[y - 2] && map[y - 3] && map[y - 1][x + 1] && map[y - 2][x + 2] && map[y - 3][x + 3] && map[y - 1][x + 1] == 'M' && map[y - 2][x + 2] == 'A' && map[y - 3][x + 3] == 'S') {
                count++;
            }
            if (map[y + 1] && map[y + 2] && map[y + 3] && map[y + 1][x - 1] && map[y + 2][x - 2] && map[y + 3][x - 3] && map[y + 1][x - 1] == 'M' && map[y + 2][x - 2] == 'A' && map[y + 3][x - 3] == 'S') {
                count++;
            }
        }
    }
}
console.log(count);
