const http = require('http'); // Au der Standardbibliothek aus NodeJS
// https://nodejs.org/dist/latest-v14.x/docs/api/http.html

const host = 'localhost'; // | '127.0.0.1';
const port = 3000;

// https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_http_createserver_options_requestlistener

const server = http.createServer((req, res) => {
  // Übung 10
  console.log(req.headers['user-agent']);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello World</h1>');
  res.end();
});

server.listen(port, host, () => {
  console.log(`🚀 Server is running at http://${host}:${port}`);
  console.log('CTRL + C to shutdown server.');
});
