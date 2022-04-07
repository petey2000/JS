const fs = require('fs');

// Promise
const getData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('data.txt', 'utf-8', (err, data) => {
      // console.log(data); // data kann erst hier weiterverarbeitet werden
      if (err) {
        reject(err);
      }
      // createHtmlDocument(data);
      resolve(data);
    });
  });
};

// ...viel code ...

getData()
  .then((data) => {
    createHtmlDocument(data);
  })
  .catch((err) => console.error(err));

const createHtmlDocument = (data) => {
  console.log(data);
};
