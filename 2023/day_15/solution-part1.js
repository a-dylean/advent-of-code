const fs = require("fs");

const getNewValue = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const asciiValue = str.charCodeAt(i);
    newStr += asciiValue;
    newStr *= 17;
    newStr %= 256;
  }
  return newStr;
};

fs.readFile("data.txt", (err, inputD) => {
  if (err) throw err;
  const input = inputD.toString().split(",");
  const result = [];
  input.map((value) => {
    result.push(getNewValue(value));
  });
  console.log(result.reduce((a, b) => a + b, 0));
});
