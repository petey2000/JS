const http = require('http'); // Aus der Standardbibliothek von NodeJs
const express = require('express');
const color = require('chalk');
const socketIo = require('socket.io');

const app = express();

// socket.io Initialization
const webServer = http.Server(app);
const io = socketIo(webServer);

const host = 'localhost'; // 127.0.0.1
const port = 3000;

let users = [];

// Middleware
app.use(express.static('public'));

app.use(express.json()); // HTTP-Request Body Informationen werden als JSON erwartet und in JS-Objekt-Notation umgewandelt
app.use(express.urlencoded({ extended: true })); // URL-encoded Satzeichen werden automatisch decoded

app.get('/', (req, res) => {
  res.send('Server is running');
});

const onSocketConnection = (socket) => {
  //console.log(socket);
  let addedUser = false;

  console.log(
    `Client mit ID: ${color.yellow(socket.id)} über Addresse: ${color.yellow(
      socket.conn.remoteAddress
    )} connected.`
  );

  socket.on('add user', (username) => {
    // Guard - Wenn Benutzer bereits hinzugefügt wurde, dann abbruch
    if (addedUser) return;
    socket.username = username;
    addedUser = true;
    users.push(socket); // users beinhaltet alle verbundenden Clients (sockets)

    // Event an verbundenen Client (Socket)
    socket.emit('user connected', {
      userCounter: users.length,
    });

    // Event an alle verbunden Clients (Sockets) bzw. User;
    socket.broadcast.emit('user joined', {
      username: socket.username,
      userCounter: users.length,
    });

    // Event wenn Verbindung unterbrochen wurde
    socket.on('disconnect', (e) => {
      if (addedUser) {
        const idx = getUserIndexByUsername(socket.username);
        users.splice(idx, 1);

        socket.broadcast.emit('user left', {
          username: socket.username,
          userCounter: users.length,
        });
      }
    });
  });

  socket.on('client message', (data) => {
    const { username, message } = data;

    console.log(`${color.yellow(username)}: ${message}`);

    socket.broadcast.emit('new message', {
      username,
      message,
    });
  });
};

// Functions =========================
const getUserIndexByUsername = (username) => {
  return users.findIndex((socket) => socket.username === username);
};

const onStdInput = (data) => {
  // Event - event vom Server wird definiert und ausgelöst.
  io.emit('server message', { message: data.toString() });
};

// read text from console (terminal) and sent it to all clients
process.stdin.addListener('data', onStdInput);

// on Socket connection - Verbindung über WebSocket Protokoll via Socket.io findet statt.
io.on('connection', onSocketConnection);

webServer.listen(port, host, () => {
  console.log(color.magenta(`Server is running at: http://${host}:${port}`));
  console.log(color.yellow('CTRL + C to shutdown'));
});
