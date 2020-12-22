import rawPassports from "./4-input.js";

console.log("4-1");

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

type Passport = {
  [index: string]: string;
};

const passports = rawPassports
  .trim()
  .split("\n\n")
  .filter((rawPassport) => !!rawPassport)
  .map((rawPassport) => {
    return rawPassport
      .split("\n")
      .join(" ")
      .split(" ")
      .reduce<Passport>((passport, keyAndValue) => {
        const [key, value] = keyAndValue.split(":");
        passport[key] = value;
        return passport;
      }, {});
  })
  .filter((passport) => {
    return requiredFields.reduce<Boolean>((valid, field) => {
      return valid && !!passport[field];
    }, true);
  });

console.log(passports.length);
