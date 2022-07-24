const eventEmitter = require("events");
const cons = new eventEmitter();
cons.on("res", (a, b) => {
  console.log(`hello ${a} bosdk ${b}`);
});
cons.on("res", (a) => {
  console.log(`abbe ${a} bosdk`);
});

cons.emit("res", "tum", 34);
