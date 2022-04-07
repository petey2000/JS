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
app.get('/api/products', (req, res) => {
  const products = csvdb.getProducts();
  res.send(products);
});

// app.get('/books/:bookId/:title/:genre', (req, res) => {
//   const bookId = req.params.bookId;
//   const genre = req.params.genre;
//   const title = req.params.title;

//   // const { bookId, genre, title } = req.params;

//   res.send(bookId);
// });

app.get('/api/product/:code', (req, res) => {
  const { code } = req.params;
  const product = csvdb.getProductByCode(code);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send('Error 404');
  }
});

app.listen(port, host, () => {
  console.log(color.magenta(`Server is running at: http://${host}:${port}`));
  console.log(color.yellow('CTRL + C to shutdown'));
});
