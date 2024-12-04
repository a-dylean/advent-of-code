import * as fs from 'fs';
const data: string = fs.readFileSync('./data', 'utf-8');

const rows : string[] = data.split('\n');
const map : any[] = [];
let count: number = 0;
for (let row of rows) {
    map.push(row.split(''));
}

for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
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
