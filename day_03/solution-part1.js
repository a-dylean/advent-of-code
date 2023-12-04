const fs = require("fs");

const findNumIndexes = (line) => {
  const matches = [...line.matchAll(/[0-9]/g)];
  const numIndexes = [];
  for (const match of matches) {
    numIndexes.push(match?.index);
  }
  return numIndexes;
};

const findSymIndexes = (line) => {
  const matches = [...line.matchAll(/[^0-9.]/g)];
  const symIndexes = [];
  for (const match of matches) {
    symIndexes.push(match?.index);
  }
  return symIndexes;
};

fs.readFile("data-example.txt", (err, inputD) => {
  if (err) throw err;
  let numbers = [];
  let linenums = [];
  const lines = inputD.toString().split("\n");

  lines.map((line) => {
    const regexp = /\d+/g;
    let match;
    while ((match = regexp.exec(line))) {
      linenums.push({
        number: parseInt(match[0]),
        start: match.index,
        end: regexp.lastIndex,
      });
    }
  });
 

  console.log(linenums);
});
