//Funcion para crear mensajes y repetir codigo
const createMessage = (name, message) => {
  return {
    name,
    message,
    date: new Date().getTime(),
  };
};
//Exporto la funcion para que puedan utilizarla los demas js
module.exports = {
  createMessage,
};
