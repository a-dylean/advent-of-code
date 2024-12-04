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
        if (map[y][x] == 'A') {
            if (map[y + 1] && map[y - 1] && map[y + 1][x + 1] && map[y + 1][x - 1] && map[y - 1][x + 1] && map[y - 1][x - 1] && map[y + 1][x + 1] == 'S' && map[y + 1][x - 1] == 'M' && map[y - 1][x + 1] == 'S' && map[y - 1][x - 1] == 'M') {
                count++;
            }
            if (map[y + 1] && map[y - 1] && map[y + 1][x + 1] && map[y + 1][x - 1] && map[y - 1][x + 1] && map[y - 1][x - 1] && map[y + 1][x + 1] == 'M' && map[y + 1][x - 1] == 'M' && map[y - 1][x + 1] == 'S' && map[y - 1][x - 1] == 'S') {
                count++;
            }
            if (map[y + 1] && map[y - 1] && map[y + 1][x + 1] && map[y + 1][x - 1] && map[y - 1][x + 1] && map[y - 1][x - 1] && map[y + 1][x + 1] == 'S' && map[y + 1][x - 1] == 'S' && map[y - 1][x + 1] == 'M' && map[y - 1][x - 1] == 'M') {
                count++;
            }
            if (map[y + 1] && map[y - 1] && map[y + 1][x + 1] && map[y + 1][x - 1] && map[y - 1][x + 1] && map[y - 1][x - 1] && map[y + 1][x + 1] == 'M' && map[y + 1][x - 1] == 'S' && map[y - 1][x + 1] == 'M' && map[y - 1][x - 1] == 'S') {
                count++;
            }
        }
    }
}
console.log(count);
