const fs = require("fs");

const transformInput = (input) => {
  const lines = input.split("\n");
  const result = lines.map((line) => {
    const [hand, bid] = line.split(" ");
    return { hand, bid, type: null };
  });
  return result;
};

const cardValues = "AKQJT98765432";
function cardValue(card) {
  return cardValues.length - cardValues.indexOf(card);
}

function handType(hand) {
  const cardCounts = {};
  for (const card of hand) {
    cardCounts[card] == undefined
      ? (cardCounts[card] = 1)
      : (cardCounts[card] += 1);
  }
  const keys = Object.keys(cardCounts);
  if (keys.length === 1) return 7;
  if (keys.length === 2) {
    for (const key of keys) {
      if (cardCounts[key] === 4) {
        return 6;
      }
    }
    return 5;
  }
  if (keys.length === 3) {
    for (const key of keys) {
      if (cardCounts[key] === 3) {
        return 4;
      }
    }
    return 3;
  }
  if (keys.length === 4) return 2;
  return 1;
}

function compareHands(hand1, hand2) {
  if (handType(hand1) > handType(hand2)) return 1;
  if (handType(hand1) < handType(hand2)) return -1;
  for (const i in hand1) {
    if (cardValue(hand1[i]) === cardValue(hand2[i])) continue;
    if (cardValue(hand1[i]) > cardValue(hand2[i])) return 1;
    return -1;
  }
}

fs.readFile("data.txt", (err, inputD) => {
  if (err) throw err;
  const hands = transformInput(inputD.toString());
  hands.sort((a, b) => compareHands(a.hand, b.hand));
  console.log(hands.reduce((acc, val, idx) => acc + val.bid * (idx + 1), 0));
});
