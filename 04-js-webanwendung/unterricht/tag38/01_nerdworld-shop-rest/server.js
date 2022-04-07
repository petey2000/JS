const express = require('express');
const color = require('chalk');
const csvdb = require('./db/csvdb');
// const ejs = require('ejs'); // nicht notwendig, wird von express automatisch eingebunden, wenn vorhanden (in node_modules)

const app = express();

const host = 'localhost'; // 127.0.0.1
const port = 3000;

// read from DB Model
csvdb.loadProductsFromFile('data/products.csv');

// use ejs - as template engine
app.set('view engine', 'ejs');

app.set('views', 'views');
// Middleware
app.use(express.static('public'));

app.use(express.json()); // HTTP-Request Body Informationen werden als JSON erwartet und in JS-Objekt-Notation umgewandelt
app.use(express.urlencoded({ extended: true })); // URL-encoded Satzeichen werden automatisch decoded

app.get('/', (req, res) => {
  const products = csvdb.getProducts();
  res.render('products.ejs', { products });
});

app.get('/product/:code', (req, res) => {
  const { code } = req.params;
  const product = csvdb.getProductByCode(code);
  if (product) {
    res.render('product.ejs', { product });
  } else {
    res.status(404).render('error');
  }
});

// API

// C(R)UD - Read HTTP-Request GET
// (B)READ - Browse HTTP-Request GET
app.get('/api/products', (req, res) => {
  const products = csvdb.getProducts();

  res.send(products);
});

// C(R)UD - Read HTTP-Request GET
// B(R)EAD - Browse
app.get('/api/product/:code', (req, res) => {
  const { code } = req.params;
  const product = csvdb.getProductByCode(code);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send('Error 404');
  }
});

// (C)RUD - Create HTTP-Request POST
// BRE(A)D - Add
app.post('/api/product', (req, res) => {
  // TODO: Insert product in CSVDB

  res.send(req.body);
});

app.listen(port, host, () => {
  console.log(color.magenta(`Server is running at: http://${host}:${port}`));
  console.log(color.yellow('CTRL + C to shutdown'));
});
