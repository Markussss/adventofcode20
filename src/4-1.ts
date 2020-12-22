import rawPassports from "./4-input.js";

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

type Passport = {
  [index: string]: string;
  byr: string;
  iyr: string;
  eyr: string;
  hgt: string;
  hcl: string;
  ecl: string;
  pid: string;
  cid: string;
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
      .reduce<Passport>(
        (passport, keyAndValue) => {
          const [key, value] = keyAndValue.split(":");
          passport[key] = value;
          return passport;
        },
        {
          byr: "",
          iyr: "",
          eyr: "",
          hgt: "",
          hcl: "",
          ecl: "",
          pid: "",
          cid: "",
        }
      );
  })
  .filter((passport) => {
    return requiredFields.reduce<Boolean>((valid, field) => {
      return valid && !!passport[field];
    }, true);
  });

console.log(passports.length);
