const eventEmitter = require("events");
const cons = new eventEmitter();
cons.on("res", (a, b) => {
  console.log(`hello ${a} brother ${b}`);
});
cons.on("res", (a) => {
  console.log(`boom guys ${a} brother`);
});
cons.on("res2", (a,b) => {
  console.log(`boom guys ${a} brother ${b}`);
});

cons.emit("res", "tum", 34);
cons.emit("res2", "tum2", 342);
