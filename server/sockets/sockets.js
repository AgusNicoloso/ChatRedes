//Recibo la variable IO
const { io } = require("../server");
const { User } = require("../classes/user");
const { createMessage } = require("../utils/utils");
const users = new User();
//Para saber cuando un usuario se conecta/desconecta al server
io.on("connection", (client) => {
  client.on("loginChat", (data, callback) => {
    //Si entran sin nombre lanza un mensaje de error diciendo que el nombre es necesario
    if (!data.name) {
      return callback({
        error: true,
        message: "El nombre es necesario",
      });
    }
    //Agrego el usuario a la lista de usuarios conectados
    let usersList = users.addUser(client.id, data.name);
    //Le aviso a todos los usuarios conectados y el mensaje de que una persona se unió al chat
    client.broadcast.emit("listUsers", users.getUsers());
    client.broadcast.emit("createMessage", createMessage(data.name, "se unió"));

    callback(usersList);
  });
  //Recibo cuando alguien envia un mensaje
  client.on("createMessage", (data, callback) => {
    let user = users.getUser(client.id);
    let message = createMessage(user.name, data.message);
    //Envio el mensaje a todos
    client.broadcast.emit("createMessage", message);
    callback(message);
  });
  //Cuando alguien se desconecta muestro un mensaje de la persona que salio del chat
  client.on("disconnect", () => {
    let userDeleted = users.deleteUser(client.id);
    //Les aviso a todos que una persona salio del chat
    client.broadcast.emit(
      "createMessage",
      createMessage(userDeleted.name, "salió del chat")
    );
    client.broadcast.emit("listUsers", users.getUsers());
  });

  //Mensajes privados
  client.on("privateMessage", (data) => {
    let user = user.getUser(client.id);
    let message = createMessage(user.name, data.message);
    //Le envio un mensaje privado al usurio que asigne en el .to()
    client.broadcast.to(data.to).emit("privateMessage", message);
  });
});
