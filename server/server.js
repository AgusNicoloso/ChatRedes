//Cargo la libreria de express
const express = require("express");
//Cargo la librera path
const path = require("path");
//Cargo la libreria socketIO
const socketIO = require("socket.io");
//Cargo la libreria http
const http = require("http");
//Inicializo express
const app = express();
//Creo el servidor para poder correr la app
let server = http.createServer(app);
//Creo un public path para compartir y hacer publica la carpeta public
const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;
//Utilizo un Middleware para habilitar la carpeta publica y que todos puedan acceder
app.use(express.static(publicPath));
//Exporto la variable socketIO - esta es la comunicacion del backend
module.exports.io = socketIO(server);
require("./sockets/sockets");
//Listener para que escuche el puerto
server.listen(port, (err) => {
  //Si hay un error lanzo el error
  if (err) throw new Error(err);
  //Sino muestro en consola que se esta corriendo el servidor en el puerto...
  console.log(`Servidor corriendo en puerto ${port}`);
});
