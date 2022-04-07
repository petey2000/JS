const http = require('http'); // Standardbibliothek von Node - https://nodejs.org/dist/latest-v16.x/docs/api/http.html

const fs = require('fs');

const host = 'localhost'; // localhost |  127.0.0.1
const port = 3000;

const data = fs.readFileSync('public/index.html', 'utf-8');

const server = http.createServer((req, res) => {
  const { headers, method } = req;
  // console.log(headers);
  console.log('url: ', req.url); //=> '/'

  switch (req.url) {
    case '/api/people':
      const people = [
        { vorname: 'Max', nachname: 'Mustermann' },
        { vorname: 'John', nachname: 'Wick' },
        { vorname: 'Jane', nachname: 'Doe' },
      ];

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify(people));
      res.end();
      break;
    case '/about':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('Hello About');
      res.end();

      break;

    default:
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
  }
});

server.listen(port, host, () => {
  console.log(`🚀 Server running at http://${host}:${port}/`);
  console.log('CTRL + C to shutdown server.');
});
