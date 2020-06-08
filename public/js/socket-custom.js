var socket = io();
//Mensaje cuando se conecta al servidor
socket.on("connect", function () {
  console.log("Conectado al servidor");
});
//Mensaje cuando se desconecta al servidor - Escuchar
socket.on("disconnect", function () {
  console.log("Se perdio la conexión con el servidor");
});
//Enviar informacion
socket.emit(
  "sendMessage",
  {
    user: "agustin",
    message: "Hello",
  },
  function (answer) {
    console.log("Respuesta server : ", answer);
  }
);

//Escuchar informacion
socket.on("sendMessage", function (message) {
  console.log("Servidor : ", message);
});
