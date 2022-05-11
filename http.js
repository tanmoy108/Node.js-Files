const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello developer, ");
    res.write("how are you?");
    res.end();
  } else if (req.url === "/About") {
    res.write("this is about page");
    res.end();
  } else {
    res.write("not found");
    res.end();
  }
});

server.listen(3000);
console.log("listening on 3000");
