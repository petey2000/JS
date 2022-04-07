const express = require('express');
const color = require('chalk');
const characterProps = require('./data/characterProps');

const app = express();

const host = 'localhost'; // 127.0.0.1
const port = 3000;

// use ejs - as template engine
app.set('view engine', 'ejs');

app.set('views', 'views');
// Middleware
app.use(express.static('public'));

app.use(express.json()); // HTTP-Request Body Informationen werden als JSON erwartet und in JS-Objekt-Notation umgewandelt
app.use(express.urlencoded({ extended: true })); // URL-encoded Satzeichen werden automatisch decoded

app.get('/', (req, res) => {
  res.render('character', { characterProps });
});

app.listen(port, host, () => {
  console.log(color.magenta(`Server is running at: http://${host}:${port}`));
  console.log(color.yellow('CTRL + C to shutdown'));
});
