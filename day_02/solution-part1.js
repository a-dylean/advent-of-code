const fs = require("fs");

fs.readFile("data.txt", (err, inputD) => {
  if (err) throw err;
  let array = inputD
    .toString()
    .split("\n")
    .map((gameString) => {
      const [gameNum, ...rounds] = gameString.split(": ");
      return { [gameNum]: rounds.toString().split(/,|;/).map(x => x.trim()) };
    });

  for (let i = 0; i < array.length; i++) {
     console.log(array[i])
  }

  // console.log(array)
});
