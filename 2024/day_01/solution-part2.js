const fs = require("fs");

function numInList(num, list) {
    let count = 0;
    for (item of list) {
        if (item == num) {
            count++;
        }
    }
    return count;
}

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
    const result = [];
    for (let num of listOne) {
        let score = num * numInList(num, listTwo);
        result.push(score)
    }
    console.log(result.reduce((a, b) => a + b, 0));
  });