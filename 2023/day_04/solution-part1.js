const fs = require("fs");

fs.readFile("data.txt", (err, inputD) => {
  if (err) throw err;
  const lines = inputD.toString().split("\n");
  const winningNums = [];
  const gameNums = [];
  lines.forEach((line) => {
    const allNums = line.split(/:|\|/);
    winningNums.push(allNums[1].match(/\d+/g));
    gameNums.push(allNums[2].match(/\d+/g));
  });
  let totalPoints = 0;
  for (let i = 0; i < winningNums.length; i++) {
    let gamePoints = 0;
    winningNums[i].forEach((num) => {
      if (gameNums[i].includes(num)) {
        gamePoints = gamePoints === 0 ? 1 : gamePoints * 2;
      }
    });
    totalPoints += gamePoints;
  }
  console.log(totalPoints);
});