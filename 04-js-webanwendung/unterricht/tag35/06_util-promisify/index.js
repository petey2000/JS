const fs = require('fs');
const util = require('util');

const getFileContent = util.promisify(fs.readFile);
// util.promisify fängt das letzte Argument als Callback-Funktion ab und ummantel die Funktion mit einem Promise-Objekt. Das ummantelte Promise-Objekt wird zusätzlich von einer weiteren Funktion mit den Argumenten ummantelt.

// https://javascript.info/promisify
// https://medium.com/trabe/understanding-nodes-promisify-and-callbackify-d2b04efde0e0

// promises Unterobject
const getFileContent2 = (path, encoding = 'utf-8') => {
  return fs.promises.readFile(path, encoding);
};

const getFileContent3 = (path, encoding = 'utf-8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      // console.log(data);
      if (err) reject(err);
      resolve(data);
    });
  });
};

getFileContent('files/hello.txt', 'utf-8')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
