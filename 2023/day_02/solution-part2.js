const fs = require("fs");

const calculateResult = (games) => {
  const arrOfPowers = [];
  for (game of games) {
    const power = game.blue * game.red * game.green;
    arrOfPowers.push(power);
  }
  return arrOfPowers.reduce((a, b) => a + b, 0);
};
const biggestColorValues = (colors) => {
  const colorValues = {};
  colors.forEach((color) => {
    const [value, colorName] = color.split(" ");
    const numericValue = parseInt(value);
    if (!(colorName in colorValues) || numericValue > colorValues[colorName]) {
      colorValues[colorName] = numericValue;
    }
  });
  return colorValues;
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
  const biggestNums = [];
  for (let i = 0; i < array.length; i++) {
    Object.values(array[i]).forEach((rounds) => {
      biggestNums.push(biggestColorValues(rounds));
    });
  }
  console.log(calculateResult(biggestNums));
});
