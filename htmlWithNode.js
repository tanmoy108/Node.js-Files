const { readFileSync } = require("fs");
const https = require("http");

const homePage = readFileSync('./dom array/index.html');
const homeStyle = readFileSync('./dom array/style.css');
const homeJs = readFileSync('./dom array/script.js');

https
  .createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html" }); //for plain text "text/plain"
      res.write(homePage);
      res.end();
    }
    else if (req.url === "/style.css")
    {
      res.writeHead(200, { "content-type": "text/css" }); // for image : image/svg+xml
      res.write(homeStyle);
      res.end();
    }
    else if (req.url === "/script.js")
    {
      res.writeHead(200, { "content-type": "text/javascript" });
      res.write(homeJs);
      res.end();
    }
    else if (req.url === "/about")
    {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>about page</h1>");
      res.end();
    }
    else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>404 not found</h1>");
      res.end();
    }
  })
  .listen(3000);
