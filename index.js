// HW4
// Task2
const arr1 = ["(", ")", "(", ")", ")"];
const arr2 = ["(", ")", "(", ")", "{", "(", "}", ")", 2, "a"];
const arr3 = ["(", ")", "(", "(", "(", ")", "}", "(", ")", ")"];

function countBrackets(arr) {
  const leftBracket = "(";
  const rightBracket = ")";
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === leftBracket) {
      sum -= 1;
    } else if (arr[i] === rightBracket) {
      sum += 1;
    }
  }
  return sum === 0;
}
console.log(countBrackets(arr1));
console.log(countBrackets(arr2));
console.log(countBrackets(arr3));
// Task3
function minArrNumber(arr) {
  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(minArrNumber([4, 81, 3, -12, 99, 14]));
// Task4
function maxArrNumber(arr) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxArrNumber([4, 81, 3, -12, 99, 14]));
// Task5
function getSumm(arr) {
  return arr.flat().reduce((a, b) => a + b, 0);
}
console.log(
  getSumm([
    [1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ])
);
//Task6
function getOdd() {
  let res = [];
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0 || i === 0) {
      res.push(i);
    }
  }
  return res;
}
console.log(getOdd());
//Task7
//done
//Task8
let h = 2;

for (let i = -h; i <= h; i++) {
  let line = "";
  for (let j = -h; j <= h; j++) {
    if (Math.abs(i) + Math.abs(j) == h) {
      line += "+";
    } else if (Math.abs(i) < 2 && line.length > 0 && line.length < 4) {
      line += "+";
    } else {
      line += " ";
    }
  }

  console.log(line);
}
// Task9
let count = 1;
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(count));
  count += 2;
}
//task10
for (let i = 9; i >= 0; i--) {
  let line = "";
  for (let j = 0; j <= i; j++) {
    line += j + " ";
  }
  console.log(line);
}
//Task11
let space = 9;
for (let i = 9; i >= 0; i--) {
  let line = "";

  for (let j = 0; j <= i; j++) {
    line += j;
  }
  console.log((" ".repeat(space - i) + line).split("").join(" "));
}
//12 - 6
