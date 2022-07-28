const https = require("http");
https
  .createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>home page</h1>");
      res.end();
    } else if (req.url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>about page</h1>");
      res.end();
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>404 not found</h1>");
      res.end();
    }
  })
  .listen(3000);
