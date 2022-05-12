const http = require("http");
const fs = require("fs");

const a = http.createServer((req, res) => {
  const read = fs.createReadStream(`${__dirname}/node3/myfile.txt`, "utf-8");
  read.pipe(res);
});

a.listen(9000);
console.log("listening");
