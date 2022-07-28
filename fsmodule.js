const { readFileSync, writeFileSync } = require("fs");

const firstread = readFileSync("./pathfolder/first.txt", "utf8");
const secondread = readFileSync("./pathfolder/second.txt", "utf8");

console.log(firstread, secondread);

writeFileSync('./pathfolder/third.txt',`you bro ${firstread}`);

