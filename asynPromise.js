const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, rejects) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        rejects(err);
      }
      resolve(result);
    });
  });
};

const start = async () => {
  try {
    const firstRead = await getText("./pathfolder/folder/asynPromise.txt");
    const SecondRead = await getText("./pathfolder/folder/asynPromise2.txt");
    console.log(firstRead,SecondRead);
  } catch (error) {
    console.log(error);
  }
};

start();

// getText("./pathfolder/folder/asynPromise.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
