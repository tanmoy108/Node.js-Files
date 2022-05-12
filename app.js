const http = require("http");

const a = http.createServer((req, res) => {
  let body = [];
  if (req.url === "/") {
    res.write("<html><head><title>hello</title></head>");
    res.write(
      `<body><form method="post" action="/About"> <input type="text" name="para"/></form> </body>`
    );
    res.end();
  } else if (req.url === "/About" && req.method === "POST") {
    req.on("data", (chunk) => {
      body.push(chunk);
      //  console.log(chunk); //buffer type
      //  console.log(chunk.toString()); // not readable
    });

    req.on("end", () => {
      const output = Buffer.concat(body).toString();
      console.log(output);
      res.write("stream process complete");
      res.end();
    });
  } else {
    res.write("page not found");
  }
});

a.listen(3000);
console.log("listening");
