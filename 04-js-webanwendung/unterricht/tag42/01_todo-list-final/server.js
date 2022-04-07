const http = require('http'); // Aus der Standardbibliothek von NodeJs
const express = require('express');
const color = require('chalk');
const socketIo = require('socket.io');

const TodoList = require('./db/TodoList');

TodoList.add('einkaufen gehen');
TodoList.add('Kaffee trinken');
TodoList.add('Milch beim Bauer holen');
TodoList.set(1, true);

console.log(TodoList.get());

const app = express();

// socket.io Initialization
const webServer = http.Server(app);
const io = socketIo(webServer);

const host = '192.168.178.58'; // 127.0.0.1
const port = 3000;

// Middleware
app.use(express.static('public'));

app.use(express.json()); // HTTP-Request Body Informationen werden als JSON erwartet und in JS-Objekt-Notation umgewandelt
app.use(express.urlencoded({ extended: true })); // URL-encoded Satzeichen werden automatisch decoded

// ROUTING ================
app.get('/', (req, res) => {
  res.send('Server is running');
});

// RUN ==================
const run = () => {
  io.on('connection', onSocketConnection);
};

// EVENTS =================
const onSocketConnection = (socket) => {
  console.log(
    `Client mit ID: ${color.yellow(socket.id)} über Addresse: ${color.yellow(
      socket.conn.remoteAddress
    )} connected.`
  );

  socket.on('get todos', () => {
    io.emit('fetch todos', TodoList.get()); // Event an alle sockets senden

    // socket.broadCast.emit('fetch todos', TodoList.get()); // an alle anderen Client senden
    // socket.emit('fetch todos', TodoList.get()); // an verbundenen Client senden
  });

  socket.on('add todo', (text) => {
    TodoList.add(text);
    io.emit('fetch todos', TodoList.get());
  });

  socket.on('delete todo', (idx) => {
    TodoList.delete(idx);
    io.emit('fetch todos', TodoList.get());
  });

  socket.on('change todo', (idx, status) => {
    TodoList.set(idx, status);
    io.emit('fetch todos', TodoList.get());
  });

  socket.on('clean todos', () => {
    TodoList.clean();
    io.emit('fetch todos', TodoList.get());
  });
};

// FUNCTIONS =================

// on Socket connection - Verbindung über WebSocket Protokoll via Socket.io findet statt.

webServer.listen(port, host, () => {
  console.log(color.magenta(`Server is running at: http://${host}:${port}`));
  console.log(color.yellow('CTRL + C to shutdown'));

  run();
});
