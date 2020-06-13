var params = new URLSearchParams(window.location.search);
var name = params.get("name");
var formSend = $("#formSend");
var txtMessage = $("#txtMessage");
var chatBox = $("#chatBox");

//Listener
formSend.on("submit", function (e) {
  e.preventDefault();
  if (txtMessage.val().trim().length === 0) {
    return;
  }
  //Enviar informacion
  socket.emit(
    "createMessage",
    {
      name: name,
      message: txtMessage.val(),
    },
    function (message) {
      txtMessage.val("").focus();
      renderMessages(message);
    }
  );
});

function renderMessages(message) {
  var html = "";
  var date = new Date(message.date);
  var hour =
    date.getHours() +
    ":" +
    (date.getMinutes() < 10 ? "0" : "") +
    date.getMinutes();
  html += ' <li class="d-flex justify-content-between mb-4" >';

  html += ' <div class="chat-body white p-3 ml-2 z-depth-1">';
  html += ' <div class="header">';
  html += ' <strong class="primary-font">' + message.name + "</strong>";
  html +=
    '<small class="pull-right text-muted"><i class="far fa-clock"></i>' +
    " " +
    hour +
    "</small>";

  html += " </div>";
  html += ' <hr class="w-100">';
  html += ' <p class="mb-0">';
  html += message.message;
  html += " </p>";
  html += " </div>";
  html += " </li>";
  chatBox.append(html);
}
