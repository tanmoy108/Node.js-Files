// const {writeFileSync} = require("fs");

// for (let i = 0; i < 10000; i++) {
//   writeFileSync("./pathfolder/bigdata.txt", `hello bosdk ${i + 1}\n`, {
//     flag: "a",
//   });
// }

const { createReadStream } = require("fs");
const stream = createReadStream("./pathfolder/bigdata.txt", {
  highWaterMark: 1000,
  encoding: "utf8",
});
stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
