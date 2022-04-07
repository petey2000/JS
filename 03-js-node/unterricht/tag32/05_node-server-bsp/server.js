// Aus Standard-Bib von NodeJS
const http = require('http');
const url = require('url');
const qs = require('querystring');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // OVER HTTP-REQUEST (req)
  console.log(req.url);
  const parsedUrl = url.parse(req.url, true);

  console.log(parsedUrl.pathname, parsedUrl.query);

  console.log('parsedUrl:', parsedUrl);

  const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');
  const queryString = parsedUrl.query;

  console.log(queryString);
  // const headers = req.headers;
  // const method = req.method;
  const { headers, method } = req;

  console.log('path:', path, '\nparams:', queryString);

  let body = '';
  req.on('data', (chunk) => {
    console.log('data - erhalte daten');
    body += chunk.toString();
  });
  req.on('end', () => {
    console.log('end - bereite response vor:');
    // reagiere auf url-pfad und gib passenden Content zurück
    const data = { path, queryString, headers, method, body };
    // console.log(body);
    const route = (data, res) => {
      return typeof routes[path] !== 'undefined'
        ? routes[path](data, res)
        : routes['404'](data, res);
    };
    route(data, res);
  });
});

const routes = {
  contact: (data, res) => {
    if (data.method === 'POST') {
      const obj = qs.parse(data.body);
      const jsonStr = JSON.stringify(obj);

      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.writeHead(200);
      res.write(jsonStr);
      res.end('\n');
    } else {
      console.log(data.queryString);
      const firstname = data.queryString.vorname ? data.queryString.vorname : '';
      const html = `<html>
      <head>
        <title>Contact</title>
      </head>
      <body>
        <h2>Contact ${firstname}</h2>
      </body>
      </html>`;
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.write(html);
      res.end('\n');
    }
  },
  links: (data, res) => {
    const obj = {
      link: 'https://www.amazon.de',
      query: data.queryString,
    };
    const jsonStr = JSON.stringify(obj);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);
    res.write(jsonStr);
    res.end('\n');
  },
  hello: (data, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200);
    res.write('Hello World');
    res.end('\n');
  },
  404: (data, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(404);
    res.write('ERROR 404 - FILE NOT FOUND');
    res.end('\n');
  },
};

// Server starten
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
