const { readFile, writeFile } = require("fs");

readFile("./pathfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstread = result;
  readFile("./pathfolder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondread = result;
    writeFile(
      "./pathfolder/thirdasync.txt",
      `fuck you async ${firstread} ${secondread}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done");
      }
    );
  });
});
