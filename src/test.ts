(async () => {
  if (process.argv[2]) {
    let file = process.argv[2];
    await import(`../dist/${file}.js`);
    process.exit(0);
  }
})();
