const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const fread = await readFile("./pathfolder/folder2/first2.txt", "utf8");
    const sread = await readFile("./pathfolder/folder2/second2.txt", "utf8");
    console.log(fread, sread);
    await writeFile("./pathfolder/folder/writeasynPromise2.txt",`this is write: ${fread} ${sread}`);
  } catch (error) {
    console.log(error);
  }
};
start();
