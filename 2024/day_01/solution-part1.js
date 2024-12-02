const fs = require("fs");

fs.readFile("data", (err, inputD) => {
    if (err) throw err;
    const listOne = [];
    const listTwo = [];
    inputD
      .toString()
      .split("\n")
      .forEach((str) => {
        const nums = str.split(' ');
        const firstNum = nums[0];
        const secondNum = nums[3];
        listOne.push(firstNum);
        listTwo.push(secondNum); 
      });
    listOne.sort();
    listTwo.sort();
    const result = [];
    let index = 0;
    for (let num of listOne) {
        const distance = Math.abs(num - listTwo[index]);
        index++;
        result.push(distance)
    }
    console.log(result.reduce((a, b) => a + b, 0));
  });