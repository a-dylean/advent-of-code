const fs = require("fs");

const calculateDistance = (time, distance) => {
  const timeOfRace = [];
  const distances = [];
  for (let i = 0; i <= time; i++) {
    timeOfRace.push(i);
  }
  const timeOfCharge = [...timeOfRace].reverse();
  for (let i = 0; i < timeOfRace.length; i++) {
    distances.push(timeOfRace[i] * timeOfCharge[i]);
  }
  const result = distances.filter((num) => num > distance);
  return result.length;
};
fs.readFile("data.txt", (err, inputD) => {
  if (err) throw err;
  const lines = inputD.toString().split("\n");
  const timesOfRace = [...lines[0].split(":")[1].match(/\d+/g)];
  const distances = [...lines[1].split(":")[1].match(/\d+/g)];
  const resultArr = [];
  for (let i = 0; i < timesOfRace.length; i++) {
    resultArr.push(calculateDistance(timesOfRace[i], distances[i]));
  }
  const result = resultArr.reduce((acc, curr) => acc * curr);
  console.log(result);
});
