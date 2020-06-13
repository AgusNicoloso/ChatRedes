//Recibo la variable IO
const { io } = require("../server");
const { User } = require("../classes/user");
const { createMessage } = require("../utils/utils");
const users = new User();
//Para saber cuando un usuario se conecta/desconecta al server
io.on("connection", (client) => {
  client.on("loginChat", (data, callback) => {
    if (!data.name) {
      return callback({
        error: true,
        message: "El nombre es necesario",
      });
    }

    let usersList = users.addUser(client.id, data.name);
    client.broadcast.emit("listUsers", users.getUsers());
    client.broadcast.emit("createMessage", createMessage(data.name, "se unió"));

    callback(usersList);
  });

  client.on("createMessage", (data, callback) => {
    let user = users.getUser(client.id);
    let message = createMessage(user.name, data.message);
    client.broadcast.emit("createMessage", message);
    callback(message);
  });

  client.on("disconnect", () => {
    let userDeleted = users.deleteUser(client.id);

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
    client.broadcast.to(data.to).emit("privateMessage", message);
  });
});
