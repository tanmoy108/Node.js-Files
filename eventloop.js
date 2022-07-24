//1st --------------------------------------------------
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
//2nd -----------------------------------------
const { readFile } = require("fs");
console.log("task is starting");

readFile("./pathfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstRead = result;
  console.log(`read first file ${firstRead} , second step`);
});

console.log("task end");
