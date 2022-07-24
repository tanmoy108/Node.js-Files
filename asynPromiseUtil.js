const { readFile, writeFile } = require("fs");
const util = require("util");
const readFileUtil = util.promisify(readFile);
const writeFileUtil = util.promisify(writeFile);

const start = async () => {
  try {
    const firstRead = await readFileUtil(
      "./pathfolder/folder/asynPromise.txt",
      "utf8"
    );
    const SecondRead = await readFileUtil(
      "./pathfolder/folder/asynPromise2.txt",
      "utf8"
    );
    await writeFileUtil(
      "./pathfolder/folder/writeasynPromise.txt",
      `this is promisify : ${firstRead} ${SecondRead}`
    );
    console.log(firstRead, SecondRead);
  } catch (error) {
    console.log(error);
  }
};

start();
