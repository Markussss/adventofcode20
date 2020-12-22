import rawPassports from "./4-input.js";

console.log("4-2");

interface Passport {
  [index: string]: string;
  cid: string;
}

interface PassportRules {
  [index: string]: RegExp;
}

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const passportRules: PassportRules = {
  byr: /(19[2-9][0-9])|(200[0-2])/,
  iyr: /(20(20|1[0-9]))/,
  eyr: /(20(30|2[0-9]))/,
  hgt: /((1([5-8][0-9]|9[0-3])cm)|((59|6[0-9]|7[0-6])in))/,
  hcl: /#[a-f0-9]{6}/,
  ecl: /^(amb|blu|brn|gry|grn|hzl|oth)$/,
  pid: /^[0-9]{9}$/,
  cid: /.*/,
};

function validatePassport(passport: Passport): Boolean {
  return (
    requiredFields.reduce<Boolean>((valid, field) => {
      return valid && !!passport[field];
    }, true) &&
    Object.keys(passportRules).reduce<Boolean>((valid, ruleName: string) => {
      const rule = passportRules[ruleName];
      return valid && !!passport[ruleName].match(rule);
    }, true)
  );
}

const passports = rawPassports
  .trim()
  .split("\n\n")
  .filter((rawPassport) => !!rawPassport)
  .map((rawPassport) => {
    return rawPassport
      .split("\n")
      .join(" ")
      .split(" ")
      .reduce<Passport>(
        (passport, keyAndValue) => {
          const [key, value] = keyAndValue.split(":");
          passport[key] = value;
          return passport;
        },
        { cid: "" }
      );
  })
  .filter((passport) => validatePassport(passport));

console.log(passports.length);
