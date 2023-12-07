const fs = require("fs");

const transformInput = (input) => {
  const lines = input.split("\n");
  const result = lines.map((line) => {
    const [hand, bid] = line.split(" ");
    return { hand, bid, type: null };
  });
  return result;
};

const defineType = (hand) => {
  if (hand.split("").every((char) => char === hand.charAt(0))) {
    return 7;
  }
  if (fourOutOfFiveSame(hand)) {
    return 6;
  }
  if (threeAndTwoOutOfFiveSame(hand)) {
    return 5;
  }
  if (threeOutOfFiveSame(hand)) {
    return 4;
  }
  if (twoPairsOfSameChars(hand)) {
    return 3;
  }
  if (twoOutOfFiveSame(hand)) {
    return 2;
  } else {
    return 1;
  }
};

fs.readFile("data.txt", (err, inputD) => {
  if (err) throw err;
  const hands = transformInput(inputD.toString());
  const values = [
    "A",
    "K",
    "Q",
    "J",
    "T",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];
  const fiveOfaKind = [];
  const fourOfaKind = [];
  const fullHouse = [];
  const threeOfaKind = [];
  const twoPair = [];
  const onePair = [];
  const highCard = [];
  hands.forEach((hand) => {
    hand.type = defineType(hand.hand);
  });
  hands.forEach((hand) => {
    if (hand.type === 7) {
      fiveOfaKind.push(hand);
    }
    if (hand.type === 6) {
      fourOfaKind.push(hand);
    }
    if (hand.type === 5) {
      fullHouse.push(hand);
    }
    if (hand.type === 4) {
      threeOfaKind.push(hand);
    }
    if (hand.type === 3) {
      twoPair.push(hand);
    }
    if (hand.type === 2) {
      onePair.push(hand);
    }
    if (hand.type === 1) {
      highCard.push(hand);
    }
  });
  const sortByObject = values.reduce((obj, item, index) => {
    return {
      ...obj,
      [item]: index,
    };
  }, {});
  const fiveOfaKindSorted = fiveOfaKind.sort(
    (a, b) => sortByObject[a.hand[0]] - sortByObject[b.hand[0]]
  );
  const fourOfaKindSorted = fourOfaKind.sort(
    (a, b) => sortByObject[a.hand[0]] - sortByObject[b.hand[0]]
  );
  const fullHouseSorted = fullHouse.sort(
    (a, b) => sortByObject[a.hand[0]] - sortByObject[b.hand[0]]
  );
  const threeOfaKindSorted = threeOfaKind.sort(
    (a, b) => sortByObject[a.hand[0]] - sortByObject[b.hand[0]]
  );
  const twoPairSorted = twoPair.sort(
    (a, b) => sortByObject[a.hand[0]] - sortByObject[b.hand[0]]
  );
  const onePairSorted = onePair.sort(
    (a, b) => sortByObject[a.hand[0]] - sortByObject[b.hand[0]]
  );
  const highCardSorted = highCard.sort(
    (a, b) => sortByObject[a.hand[0]] - sortByObject[b.hand[0]]
  );
  const result = [
    ...fiveOfaKindSorted,
    ...fourOfaKindSorted,
    ...fullHouseSorted,
    ...threeOfaKindSorted,
    ...twoPairSorted,
    ...onePairSorted,
    ...highCardSorted,
  ];
  const totalWinnings = [];

  const reversedResult = [...result].reverse();
  reversedResult.forEach((hand, index) => {
    totalWinnings.push(hand.bid * (index + 1));
  });
  console.log(Math.max(...totalWinnings));
  console.log((totalWinnings.reduce((acc, curr) => acc + curr)));
});

function fourOutOfFiveSame(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    if (!charCount[str[i]]) {
      charCount[str[i]] = 1;
    } else {
      charCount[str[i]]++;
    }
  }
  const counts = Object.values(charCount);
  const uniqueCounts = new Set(counts);
  return uniqueCounts.has(4);
}

function threeAndTwoOutOfFiveSame(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    if (!charCount[str[i]]) {
      charCount[str[i]] = 1;
    } else {
      charCount[str[i]]++;
    }
  }
  const counts = Object.values(charCount);
  const uniqueCounts = new Set(counts);
  if (uniqueCounts.size === 2) {
    const [count1, count2] = uniqueCounts;
    return (count1 === 2 && count2 === 3) || (count1 === 3 && count2 === 2);
  }
  return false;
}

function threeOutOfFiveSame(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    if (!charCount[str[i]]) {
      charCount[str[i]] = 1;
    } else {
      charCount[str[i]]++;
    }
  }

  const counts = Object.values(charCount);
  const uniqueCounts = new Set(counts);
  return uniqueCounts.has(3);
}

function twoPairsOfSameChars(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    if (!charCount[str[i]]) {
      charCount[str[i]] = 1;
    } else {
      charCount[str[i]]++;
    }
  }

  let pairsCount = 0;
  for (const char in charCount) {
    if (charCount[char] === 2) {
      pairsCount++;
    }
  }

  return pairsCount === 2;
}

function twoOutOfFiveSame(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    if (!charCount[str[i]]) {
      charCount[str[i]] = 1;
    } else {
      charCount[str[i]]++;
    }
  }

  const counts = Object.values(charCount);
  const uniqueCounts = new Set(counts);
  return uniqueCounts.has(2);
}
