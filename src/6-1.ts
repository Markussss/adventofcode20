import groupAnswers from "./6-input.js";

function countAnswers(groupAnswer: string): number {
  return groupAnswer
    .split("\n")
    .join("")
    .split("")
    .sort()
    .reduce((count, character, index, array) => {
      return count + (character != array[index + 1] ? 1 : 0);
    }, 0);
}

function sum(a: number, b: number): number {
  return a + b;
}

console.log(groupAnswers.map(countAnswers).reduce(sum, 0));
