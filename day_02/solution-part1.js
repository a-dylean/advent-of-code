const fs = require("fs");

const isPossible = (combination) => {
  const splittedCombination = combination.split(" ");
  if (
    parseInt(splittedCombination[0]) > 12 &&
    splittedCombination[1] == "red"
  ) {
    return false;
  } else if (
    parseInt(splittedCombination[0]) > 13 &&
    splittedCombination[1] == "green"
  ) {
    return false;
  } else if (
    parseInt(splittedCombination[0]) > 14 &&
    splittedCombination[1] == "blue"
  ) {
    return false;
  }
  return true;
};

const calculateSum = (games) => {
  const ids = [];
  for (game of games) {
    const values = game.split(" ");
    ids.push(parseInt(values[1]));
  }
  return ids.reduce((a, b) => a + b, 0);
};

fs.readFile("data.txt", (err, inputD) => {
  if (err) throw err;
  let array = inputD
    .toString()
    .split("\n")
    .map((gameString) => {
      const [gameNum, ...rounds] = gameString.split(": ");
      return {
        [gameNum]: rounds
          .toString()
          .split(/,|;/)
          .map((x) => x.trim()),
      };
    });

  const impossibleGames = [];
  const allGames = [];
  for (let i = 0; i < array.length; i++) {
    Object.values(array[i]).forEach((rounds) => {
      allGames.push(Object.keys(array[i]));
      for (let j = 0; j < rounds.length; j++) {
        if (!isPossible(rounds[j])) {
          impossibleGames.push(Object.keys(array[i]));
        }
      }
    });
  }

  const impossibleSet = [...new Set(impossibleGames.flat())];
  const possibleSet = allGames
    .flat()
    .filter((el) => !impossibleSet.includes(el));
  console.log(calculateSum(possibleSet));
});
