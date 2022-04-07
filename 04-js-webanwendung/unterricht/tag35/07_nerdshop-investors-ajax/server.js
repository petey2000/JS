const express = require('express');
const color = require('chalk');

const app = express();

const host = 'localhost';
const port = 3000;

// Middleware
app.use(express.static('public'));

app.get('/info', (req, res) => {
  res.send({
    price: (174 + 20 * Math.random()).toFixed(2),
    volume: (1600000 + 5000000 * Math.random()).toFixed(2),
    time: new Date().toLocaleTimeString(),
  });
});

app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.listen(port, host, () => {
  console.log(color.magenta(`Server is Running at: http://${host}:${port}`));
  console.log(color.magenta(`CTRL + C to shutdown.`));
});
