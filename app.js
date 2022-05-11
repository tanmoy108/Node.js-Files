const Exam = require("./another");

const exam = new Exam();

exam.on("timesup", ({ period, text }) => {
  console.log(`you have to go ${period} ${text}`); // this will be worked after raise
});

exam.startperiod();

//ekane another class ta import koreci ebong class er vitore function ta call koreci jate function call hoar sate emit hoye jai . are emit hole console log hobe ...