const fs = require("fs");

const createNewArr = (arr, results = [[...arr]]) => {
  let newArr = arr;
  if (arr.every((item) => item === 0)) {
    return results;
  }
  newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i + 1] - arr[i]);
  }
  results.push(newArr);
  return createNewArr(newArr, results);
};

fs.readFile("data.txt", (err, inputD) => {
  if (err) throw err;
  const lines = inputD.toString().split("\n");
  const arr = [];
  lines.map((line) => {
    const [...nums] = line.split(" ");
    arr.push(nums.map((num) => parseInt(num)));
  });
  const history = [];
  arr.forEach((line) => {
    history.push(createNewArr(line));
  });
  history.forEach((line) => {
    for (let i = line.length - 2; i >= 0; i--) {
      line[i].push(
        line[i][line[i].length - 1] + line[i + 1][line[i + 1].length - 1]
      );
    }
  });
  const result = [];
  history.forEach((line) => {
    result.push(line[0][line[0].length - 1]);
  });
  console.log(result.reduce((acc, curr) => acc + curr, 0));
});
