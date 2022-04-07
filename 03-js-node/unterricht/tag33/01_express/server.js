const express = require('express');
const fs = require('fs');
const color = require('chalk');

const app = express();

// Middleware Config
app.use(express.static('./public'));

const host = 'localhost';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Übung 11
// app.get('/seite.html', (req, res) => {
//   const document = fs.readFileSync('public/seite.html', 'utf8');

//   res.send(document);
// });

app.get('/person', (req, res) => {
  res.send([
    { vorname: 'Max', nachname: 'Mustermann' },
    { vorname: 'Jane', nachname: 'Doe' },
  ]);
});

app.listen(port, host, () => {
  console.log(color.magenta(`🚀 Server running at http://${host}:${port}/`));
  console.log(color.magenta(`CTRL + C to shutdown server.`));
});
