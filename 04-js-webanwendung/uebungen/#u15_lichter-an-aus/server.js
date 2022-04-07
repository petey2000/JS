const http = require('http'); // Aus der Standardbibliothek von NodeJs
const express = require('express');
const color = require('chalk');
const socketIo = require('socket.io');

const app = express();

// socket.io Initialization
const webServer = http.Server(app);
const io = socketIo(webServer);

const host = '192.168.178.58'; // 127.0.0.1
const port = 3000;

let light = true; //Licht ist an 

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
    
  socket.on('getLight', ()=>{

    socket.emit('setLight', light)


  })

  socket.on('toggleLight',()=>{
    light = !light
    io.emit('setLight', light)



  } )
   
};

// FUNCTIONS =================

// on Socket connection - Verbindung über WebSocket Protokoll via Socket.io findet statt.

webServer.listen(port, host, () => {
  console.log(color.magenta(`Server is running at: http://${host}:${port}`));
  console.log(color.yellow('CTRL + C to shutdown'));

  run();
});
