const fs = require("fs");

const transformInput = (nodes) => {
  const result = nodes.map((node) => {
    const [name, values] = node.split(" = ");
    const [leftNode, rightNode] = values.split(", ");
    const left = leftNode.slice(1);
    const right = rightNode.slice(0, -1);
    const nodeItem = { name, left, right };
    return nodeItem;
  });
  return result;
};

fs.readFile("data.txt", (err, inputD) => {
  if (err) throw err;
  const instructions = inputD.toString().split("\n")[0];
  const nodes = inputD.toString().split("\n");
  nodes.splice(0, 2);
  const nodesItems = transformInput(nodes);
  let count = 0;
  let currentNode = nodesItems.find((node) => node.name === "AAA");
  while (currentNode.name !== "ZZZ") {
    if (instructions.charAt(count % instructions.length) === "L") {
      currentNode = nodesItems.find((node) => node.name === currentNode.left);
    } else {
      currentNode = nodesItems.find((node) => node.name === currentNode.right);
    }
    count++;
  }
  console.log(count);
});
