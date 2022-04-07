const express = require('express');

const app = express();

const host = 'localhost';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Beispiel URL: http://localhost:3000/users/12/books/34
app.get('/users/:userId/books/:bookId', (req, res) => {
  console.log('req.params:', res.params);
  res.send(req.params);
});

// Beispiel URL: http://localhost:3000/flights/FRA-GOT
app.get('/flights/:from-:to', (req, res) => {
  console.log('req.params:', res.params);
  res.send(req.params);
});

// Beispiel URL: http://localhost:3000/plantae/Prunus.persica
app.get('/plantae/:genus.:species', (req, res) => {
  console.log('req.params:', req.params);
  res.send(req.params);
});

// Beispiel URL: http://localhost:3000/contact?firstname=Max&lastname=Mustermann&message=Hallo%20Welt
app.get('/contact', (req, res) => {
  console.log('req.query:', req.query);
  res.send(req.query);
});

app.listen(port, host, () => {
  console.log(`🚀 Running Server at: http://${host}:${port}`);
  console.log(`CTR + C to close.`);
});
