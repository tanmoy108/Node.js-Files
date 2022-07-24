const path = require('path');
const sap = path.sep; //separator
console.log(sap);

const filepath = path.join('pathfolder','folder','pathtext.txt');
console.log(filepath);
console.log(path.basename(filepath));
const originalpath = path.resolve(__dirname,'pathfolder','folder','pathtext.txt');
console.log(originalpath);

