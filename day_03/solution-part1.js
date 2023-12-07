const fs = require("fs");

// const findNumIndexes = (line) => {
//   const matches = [...line.matchAll(/[0-9]/g)];
//   const numIndexes = [];
//   for (const match of matches) {
//     numIndexes.push(match?.index);
//   }
//   return numIndexes;
// };

// const findSymIndexes = (line) => {
//   const matches = [...line.matchAll(/[^0-9.]/g)];
//   const symIndexes = [];
//   for (const match of matches) {
//     symIndexes.push(match?.index);
//   }
//   return symIndexes;
// };
const extractNumbers = (arr) => {
  const result = [];
  
  for (let str of arr) {
    const numbers = [];
    let currentNumber = '';
    
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(parseInt(str[i]))) {
        currentNumber += str[i];
      } else if (currentNumber !== '') {
        numbers.push({
          number: parseInt(currentNumber),
          start: i - currentNumber.length,
          end: i
        });
        currentNumber = '';
      }
    }
    
    if (currentNumber !== '') {
      numbers.push({
        number: parseInt(currentNumber),
        start: str.length - currentNumber.length,
        end: str.length - 1
      });
    }
    
    result.push(numbers);
  }
  
  return result;
}

const extractSymbols = (arr) => {
  const result = [];

  for (let str of arr) {
    const symbols = [];
    let currentSymbol = '';

    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[^0-9.]/)) {
        currentSymbol += str[i];
      } else if (currentSymbol !== '') {
        symbols.push({
          symbol: currentSymbol,
          start: i - currentSymbol.length,
          //end: i - 1
        });
        currentSymbol = '';
      }
    }

    if (currentSymbol !== '') {
      symbols.push({
        symbol: currentSymbol,
        start: str.length - currentSymbol.length,
       // end: str.length - 1
      });
    }

    result.push(symbols);
  }

  return result;
}

const compareArrs = (numbers, symbols) => {
   console.log(numbers)
   console.log(symbols)
  // for (let number of numbers) {
  //   for (let symbol of symbols) {
     
  //   }
  // }

  const result = [];
  for (let i = 0; i < numbers.length; i++)
  {
    for (let j = 0; j < numbers[i].length; j++)
    {
      for (let k = 0; k < symbols.length; k++)
      {
        for (let m = 0; m < symbols[k].length; m++)
        {
          console.log(numbers[i][j])
          console.log(symbols[k][m])
          // if (symbols[k][m].start >= numbers[i][j].start - 1 && symbols[k][m].start <= numbers[i][j].end + 1)
          // {
          //   result.push(numbers[i][j].number)
          // }
          
        }

      }

    }
  }
  return result

}

fs.readFile("data-example.txt", (err, inputD) => {
  if (err) throw err;
  const lines = inputD.toString().split("\n");

// lines.map((line) => {
 
//   const regexp = /\d+/g;
//     let match;
//     while ((match = regexp.exec(line))) {
//       lines.push({
//         number: parseInt(match[0]),
//         start: match.index,
//         end: regexp.lastIndex,
//       });
//     }
// })
 //console.log(lines)
  // lines.map((line) => {
  //   const regexp = /\d+/g;
  //   let match;
  //   while ((match = regexp.exec(line))) {
  //     linenums.push({
  //       number: parseInt(match[0]),
  //       start: match.index,
  //       end: regexp.lastIndex,
  //     });
  //   }
  // });
 const numbers = extractNumbers(lines);
const symbols = extractSymbols(lines);
console.log(compareArrs(numbers, symbols))
});


