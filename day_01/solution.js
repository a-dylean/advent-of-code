const fs = require("fs");

const zero = { int: "0", str: "zero" };
const one = { int: "1", str: "one" };
const two = { int: "2", str: "two" };
const three = { int: "3", str: "three" };
const four = { int: "4", str: "four" };
const five = { int: "5", str: "five" };
const six = { int: "6", str: "six" };
const seven = { int: "7", str: "seven" };
const eight = { int: "8", str: "eight" };
const nine = { int: "9", str: "nine" };

const getDigitFromStr = (str, indexArr) => {
  if (str[indexArr] == "z") return zero.int;
  else if (str[indexArr] == "o") return one.int;
  else if (str[indexArr] == "t" && str[indexArr + 1] == "w") return two.int;
  else if (str[indexArr] == "t" && str[indexArr + 1] == "h") return three.int;
  else if (str[indexArr] == "f" && str[indexArr + 1] == "o") return four.int;
  else if (str[indexArr] == "f" && str[indexArr + 1] == "i") return five.int;
  else if (str[indexArr] == "s" && str[indexArr + 1] == "i") return six.int;
  else if (str[indexArr] == "s" && str[indexArr + 1] == "e") return seven.int;
  else if (str[indexArr] == "e") return eight.int;
  else if (str[indexArr] == "n") return nine.int;
};

const returnFirstDigit = (str) => {
  let index = 0;
  let firstNum = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      firstNum += str[i];
      index = i;
      break;
    }
  }
  const arr = [];
  arr.push(
    str.indexOf(zero.str),
    str.indexOf(one.str),
    str.indexOf(two.str),
    str.indexOf(three.str),
    str.indexOf(four.str),
    str.indexOf(five.str),
    str.indexOf(six.str),
    str.indexOf(seven.str),
    str.indexOf(eight.str),
    str.indexOf(nine.str)
  );
  const newArr = arr.filter((item) => item !== -1);
  const indexArr = Math.min(...newArr);
  if (indexArr < index) {
    firstNum = getDigitFromStr(str, indexArr);
  }
  return firstNum;
};

const returnLastDigit = (str) => {
  let index = 0;
  let secondNum = "";
  for (let i = str.length; i >= 0; i--) {
    if (str[i] >= "0" && str[i] <= "9") {
      secondNum += str[i];
      index = i;
      break;
    }
  }
  const arr = [];
  arr.push(
    str.lastIndexOf(zero.str),
    str.lastIndexOf(one.str),
    str.lastIndexOf(two.str),
    str.lastIndexOf(three.str),
    str.lastIndexOf(four.str),
    str.lastIndexOf(five.str),
    str.lastIndexOf(six.str),
    str.lastIndexOf(seven.str),
    str.lastIndexOf(eight.str),
    str.lastIndexOf(nine.str)
  );
  const newArr = arr.filter((item) => item !== -1);
  const indexArr = Math.max(...newArr);
  if (indexArr > index) {
    secondNum = getDigitFromStr(str, indexArr);
  }
  return secondNum;
};

fs.readFile("data.txt", (err, inputD) => {
  if (err) throw err;
  let array = inputD
    .toString()
    .split("\n")
    .map((str) => {
      let arr = [];
      let result = [];
      const firstNum = returnFirstDigit(str);
      const secondNum = returnLastDigit(str);
      arr.push(firstNum);
      arr.push(secondNum);
      const num = parseInt(arr[0] + arr[1]);
      result.push(num);
      return result.reduce((a, b) => a + b, 0);
    });
  console.log(array.reduce((a, b) => a + b, 0));
});
