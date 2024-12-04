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
