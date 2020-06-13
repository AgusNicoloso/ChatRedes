//Creo la clase usuario
class User {
  //Inicializo un arreglo que siempre va estar vacio para poder ir agregando los usuarios que se conectan
  constructor() {
    this.users = [];
  }
  //Agrego una persona al arreglo, recibiendo id y nombre
  addUser(id, name) {
    //Creo el objeto persona
    let user = {
      id,
      name,
    };
    //Lo agrego al arreglo
    this.users.push(user);
    //Devuelvo la lista de usuarios actualizada
    return this.users;
  }
  //Obtengo un usuario por id
  getUser(id) {
    //Busco el usuario por el id en el arreglo de usuarios
    let user = this.users.filter((user) => user.id === id)[0];
    //Devuelvo el usuario
    return user;
  }
  //Obtener todos los usuarios conectados
  getUsers() {
    return this.users;
  }
  //Borrar una persona
  deleteUser(id) {
    //Guardo la persona que voy a borrar
    let deletedUser = this.getUser(id);
    //La borro del arreglo
    this.users = this.users.filter((user) => user.id != id);
    //Retorno la persona que borre para poder notificar que esa persona abandono el chat
    return deletedUser;
  }
}

//Exporto la clase para poder utilizarla en otros archivos
module.exports = {
  User,
};
