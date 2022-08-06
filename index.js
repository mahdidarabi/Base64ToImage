data = require("./data/data.js");
var fs = require("fs");

const makeOutDir = (outDirPath = "./out/") => {
  if (!fs.existsSync(outDirPath)) {
    fs.mkdirSync(outDirPath, { recursive: true });
  }
};

const generateImageFiles = (data, fileName, outDirPath = "./out/") => {
  var base64Data = data; // grid & constellations & base

  fs.writeFile(
    `${outDirPath}${fileName}.png`,
    base64Data,
    "base64",
    function (err) {
      console.log(err ?? "ok!");
    }
  );
};

const main = () => {
  makeOutDir();

  for (var key in data) {
    generateImageFiles(data[key], key);
  }
};

main();
