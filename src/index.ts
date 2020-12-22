import fs from "fs";

function ls(dir: string = "."): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(err);
      }
      resolve(files);
    });
  });
}

(async () => {
  (await ls("./dist"))
    .filter(
      (file) =>
        !file.includes("input") &&
        !file.includes("index") &&
        file.charAt(0) !== "."
    )
    .forEach(async (file) => {
      console.log(file);
      await import(`../dist/${file}`);
    });
})();
