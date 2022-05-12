const fs = require("fs");
const read = fs.createReadStream(`${__dirname}/myfile.txt`);
const write = fs.createWriteStream(`${__dirname}/writefile.txt`);

// read.on("data", (buffer) => {
//   write.write(buffer);
// });
//by event

read.pipe(write); //by pipe