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
  if (process.argv[2]) {
    let file = process.argv[2];
    await import(`../dist/${file}.js`);
    process.exit(0);
  }

  (await ls("./dist"))
    .filter(
      (file) =>
        !file.includes("input") &&
        !file.includes("index") &&
        file.charAt(0) !== "."
    )
    .forEach(async (file) => {
      await import(`../dist/${file}`);
    });
})();
