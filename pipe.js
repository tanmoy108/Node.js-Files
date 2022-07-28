const http = require("http");
const { createReadStream } = require("fs");

http
  .createServer((req, res) => {
    const fileStream = createReadStream("./pathfolder/bigdata.txt");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(3000);
