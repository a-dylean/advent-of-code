import * as fs from "fs";
const data: string = fs.readFileSync("./data", "utf-8");

const input = data.split("\n").map((rule) => rule.split(":"));

const board = new Map();
for (let [number, rule] of input) {
  let value = rule.split(" ");
  let finalValue = value.filter((item) => item);
  board.set(Number(number), [...finalValue.map(Number)]);
}

function calculate(expression) {
  const tokens = expression.match(/(\d+|\+|\*)/g);
  let result = parseInt(tokens[0], 10);
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const nextNumber = parseInt(tokens[i + 1], 10);

    if (operator === "+") {
      result += nextNumber;
    } else if (operator === "*") {
      result *= nextNumber;
    }
  }
  return result;
}

function createExpressions(values) {
  if (values.length === 0) return [];
  if (values.length === 1) return [values[0].toString()];
  function generate(index, currentExpression) {
    if (index === values.length) {
      results.push(currentExpression.join(""));
      return;
    }
    currentExpression.push("+", values[index]);
    generate(index + 1, currentExpression);
    currentExpression.pop();
    currentExpression.pop();
    currentExpression.push("*", values[index]);
    generate(index + 1, currentExpression);
    currentExpression.pop();
    currentExpression.pop();
  }

  const results: string[] = [];
  generate(1, [values[0]]);
  return results;
}

function checkEquation(key, value) {
  const expressions = createExpressions(value);
  for (let expression of expressions) {
    if (calculate(expression) == key)
      return true;
  }
  return false;
}

let trueEquations: number[] = [];

board.forEach((value, key) => {
  if (checkEquation(key, value)) trueEquations.push(key);
});

console.log(trueEquations.reduce((a, b) => a + b, 0));
