//Cargo la libreria de express
const express = require("express");
//Cargo la librera path
const path = require("path");
//Inicializo express
const app = express();
//Creo un public path para compartir y hacer publica la carpeta public
const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;
//Utilizo un Middleware para habilitar la carpeta publica y que todos puedan acceder
app.use(express.static(publicPath));

//Listener para que escuche el puerto
app.listen(port, (err) => {
  //Si hay un error lanzo el error
  if (err) throw new Error(err);
  //Sino muestro en consola que se esta corriendo el servidor en el puerto...
  console.log(`Servidor corriendo en puerto ${port}`);
});
