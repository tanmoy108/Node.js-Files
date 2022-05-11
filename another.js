const EventEmitter = require("events");

class Exam extends EventEmitter{
  startperiod() {
    setTimeout(() => {
      this.emit("timesup", {
        period: "day",
        text: "don't late",
      }); //emit raise
    }, 3000);
  }
}

module.exports = Exam;
// ekane class create kore sekane function toiri kre emit koreci .tarpor class ta export koreci 