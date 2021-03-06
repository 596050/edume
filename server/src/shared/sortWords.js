var fs = require("fs");
var readline = require("readline");

var lineReader = readline.createInterface({
  input: fs.createReadStream(`${__dirname}/words.txt`),
});

const writeToFile = (fileName, data, fileType = "json") => {
  let json = {};
  json = JSON.stringify(data);
  const directoryName = `${__dirname}/temp/${fileName}.${fileType}`;
  fs.writeFile(directoryName, json, "utf8", (err) => {
    if (err) throw err;
  });
};

let root = {};
const insertToMap = (word, mapRoot) => {
  let map = Object.assign({}, mapRoot);
  const mapRef = map;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!map.hasOwnProperty(char)) {
      map[char] = {};
    }
    map = map[char];
  }
  return mapRef;
};

let startChar = "a";
lineReader
  .on("line", function (line) {
    if (line.charAt(0) !== startChar) {
      writeToFile(startChar, root);
      startChar = line.charAt(0);
      root = {};
    }
    if (line.startsWith(startChar)) {
      root = insertToMap(line, root);
    }
  })
  .on("close", function () {
    writeToFile(startChar, root);
    root = {};
  });
