const fs = require("fs");

fs.readFile("data-example.txt", (err, inputD) => {
    if (err) throw err;
    let array = inputD
      .toString()
      .split("\n")
    console.log(array)
  });