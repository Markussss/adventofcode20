import boardingpasses from "./5-input.js";

console.log("5-1");

function convertToBinaryNumber(
  string: string,
  zero: string,
  one: string
): number {
  return parseInt(string.split(zero).join("0").split(one).join("1"), 2);
}

function getRow(boardingpass: string): number {
  return convertToBinaryNumber(boardingpass.substring(0, 7), "F", "B");
}

function getSeat(boardingpass: string): number {
  return convertToBinaryNumber(boardingpass.substring(7), "L", "R");
}

function getSeatId(boardingpass: string): number {
  return getRow(boardingpass) * 8 + getSeat(boardingpass);
}

console.log(boardingpasses.map(getSeatId).sort((a, b) => b - a)[0]);
