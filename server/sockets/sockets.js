//Recibo la variable IO
const { io } = require("../server");
//Para saber cuando un usuario se conecta/desconecta al server
io.on("connection", (client) => {
  console.log("Usuario conectado");

  client.emit("sendMessage", {
    user: "Admin",
    message: "Bienvenido al chat",
  });

  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  //Escuchar el cliente
  client.on("sendMessage", (data, callback) => {
    console.log(data);

    client.broadcast.emit("sendMessage", data);
    /* if (message.user) {
      callback({
        message: "Se envio el mensaje",
      });
    } else {
      callback({
        message: "No se envio el mensaje",
      });
    }*/
  });
});
