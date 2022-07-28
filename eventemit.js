const eventEmitter = require("events");
const cons = new eventEmitter();
cons.on("res", (a, b) => {
  console.log(`hello ${a} brother ${b}`);
});
cons.on("res", (a) => {
  console.log(`abbe ${a} brother`);
});

cons.emit("res", "tum", 34);
