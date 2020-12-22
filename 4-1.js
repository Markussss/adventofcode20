import rawPassports from "./4-1-input.js";

const requiredFields = {
  byr: "",
  iyr: "",
  eyr: "",
  hgt: "",
  hcl: "",
  ecl: "",
  pid: "",
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
      .reduce((passport, keyAndValue) => {
        const [key, value] = keyAndValue.split(":");
        passport[key] = value;
        return passport;
      }, {});
  })
  .filter((passport) => {
    return requiredFields.reduce((valid, field) => {
      return valid && !!passport[field];
    }, true);
  });

console.log(passports.length);
