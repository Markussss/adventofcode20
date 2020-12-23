import groupAnswers from "./6-input.js";

function intersect(a: any[], b: any[]): any[] {
  const aAndB = a.filter((item: any) => b.includes(item));
  return aAndB.concat(
    b.filter((item: any) => a.includes(item) && !aAndB.includes(item))
  );
}

function countAnswers(groupAnswer: string[][]): number {
  return groupAnswer.reduce(intersect, groupAnswer[0]).length;
}

function sum(a: number, b: number): number {
  return a + b;
}

console.log(groupAnswers.map(countAnswers).reduce(sum, 0));
