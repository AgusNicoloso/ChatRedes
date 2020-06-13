var socket = io();
var params = new URLSearchParams(window.location.search);
//Verifico si recibo algo por parametro
if (!params.has("name")) {
  //Si no lo envio al login con un error
  window.location = "index.html";
  throw new Error("El nombre es necesario");
}
//Si tengo el nombre por parametro, se lo asigno al objeto
var user = {
  name: params.get("name"),
};
//Mensaje cuando se conecta al servidor
socket.on("connect", function () {
  console.log("Conectado al servidor");
  socket.emit("loginChat", user, function (answer) {
    console.log("Usuarios conectados", answer);
  });
});
//Mensaje cuando se desconecta al servidor - Escuchar
socket.on("disconnect", function () {
  console.log("Se perdio la conexión con el servidor");
});

//Escuchar informacion
socket.on("createMessage", function (message) {
  renderMessages(message);
});

//Escuchar cambios de usuarios, cuando un usuario entra o sale del chat
socket.on("listUsers", function (users) {
  console.log(users);
});

//Mensajes privados
socket.on("privateMessage", function (message) {
  console.log("Mensaje privado: ", message);
});
