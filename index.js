const os = require("os");
const path = require("path");
const fs = require("fs");

// const mypath = "D:/web/node/node1/index.js";
// console.log(os.platform());
// console.log(os.version());
// console.log(os.cpus());
// console.log(path.basename(mypath));
// console.log(path.parse(mypath));

fs.writeFileSync("myfile.txt", "hello world");
fs.appendFileSync("myfile.txt", " what about you?");
// const data = fs.readFileSync("myfile.txt");
// console.log(data); //buffer type
// console.log(data.toString());
//sync means synchronous . but recommended asynchronous way.

//Asynchronous way
fs.readFile("myfile.txt", (err, data) => {
  console.log(data.toString());
});

console.log("first called because of asyn.");
