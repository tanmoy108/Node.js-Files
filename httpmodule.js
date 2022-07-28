const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome brother");
  } else if (req.url === "/about") {
    res.end("abbe sale");
  } else {
    res.end(`<h1>tum brother sale</h1>
            <h2>nikal laore</h2>`);
  }
});

server.listen("3000");
