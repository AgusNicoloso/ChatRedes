# 🖥 Chat Redes con sockets TCP/IP 🖥
Trabajo practico final de la materia Redes 2020 utilizando sockets TCP/IP. Tecnologías utilizadas **NodeJS**, **Socket.io** y **Bootstrap**.

## Instalación
Instalar [NodeJS](https://nodejs.org/es/). *Se utilizo la última versión de Node (14.4.0 Actual)*.\
Utiliza el sistema de gestión [npm](https://www.npmjs.com/).

```bash
cd ChatRedes-master
npm install
npm run serve
```
## Utilización
Una vez instalado el proyecto y levantado el servidor dirigirse a la página [localhost:3000](http://localhost:3000/). Cada pestaña o ventana del navegador es un cliente. Ingresar un nombre de usuario deseado para poder entrar al chat y utilizarlo. Para salir del chat, cerrar la pestaña o ventana del navegador.

## Pagina web
El chat también esta desplegado en nube para poder utilizarlo sin necesidad de descargar el proyecto. [Link](https://chattpredes.herokuapp.com/)

## Preguntas
**1. ¿Qué es un puerto?**\
El término "puerto" se refiere a una parte de una computadora, que nos permite establecer comunicación entre uno o varios dispositivos diferentes a través de cables, lógica o inalámbricamente. Los puertos nos permiten comunicarnos con uno o más dispositivos informáticos para enviar o recibir información y establecer comunicación entre estos dispositivos.

**2. ¿Como están formados los endpoints?**\
El endpoint es un extremo del canal de comunicación. Cuando la API interactúa con otro sistema, los touchpoints para esta comunicación se considera un endpoint. Para las API, el endpoint puede incluir la URL del servidor o servicio. Cada endpoint es donde la API puede acceder a los recursos que necesita para realizar sus funciones. La API utiliza "requests" y "responses" para trabajar. Cuando la API solicita información de una aplicación o un servidor web, recibirá un response. Cuando existen solicitudes y recursos de envío de API se denomina endpoints.

**3. ¿Qué es un socket?**\
Un socket permite la comunicación activa-activa con la maquina cliente y el servidor. Es decir, el servidor va a ser capaz de dispararle notificaciones a la maquina cliente y la maquina cliente va a poder interactuar con lo que sea que le responda el servidor.

**4. ¿A qué capa del modelo TPC/IP pertenecen los sockets? ¿Por qué?**\
El socket es un concepto utilizado principalmente en la capa de transporte. Los dispositivos de red como routers y switches no necesitan implementar la capa de transporte porque funciona en el nivel de la capa de enlace (switches) o en la capa de Internet (routers). Esto es porque los clientes y servidores actúan como puntos de acceso, para lo cual se aseguran que la conexión es confiable y sin errores. Si no hay problemas de conexión, estos permitirán que la conmutación de paquetes entre el remitente y el receptor continúe.

**5. ¿Cómo funciona el modelo cliente-servidor con TCP/IP Sockets?**\
TCP es un protocolo orientado a conexión peer-to-peer. Las aplicaciones utilizan un modelo cliente / servidor para las comunicaciones.
Un servidor es una aplicación que ofrece un servicio a los usuarios de internet y un cliente es un solicitante de un servicio. Una aplicación consta de un servidor y una parte del cliente, que puede ejecutarse en el mismo o en diferentes sistemas.
Los usuarios generalmente invocan la parte del cliente de la aplicación, que crea una solicitud para un servicio en particular y la envía al servidor de la aplicación utilizando TCP / IP como vehículo de transporte.
El servidor es un programa que recibe una solicitud, realiza el servicio requerido y devuelve los resultados en una respuesta. Un servidor puede normalmente tratar con múltiples solicitudes (múltiples clientes) al mismo tiempo.
Algunos servidores esperan solicitudes en un puerto conocido para que sus clientes sepan a qué socket IP deben enviar una solicitud. El cliente utiliza un puerto arbitrario para su comunicación. Los clientes que desean comunicarse con un servidor que no utiliza un puerto conocido deben tener otro mecanismo para aprender a qué puerto deben atender sus solicitudes.

**6. ¿Cuáles son las causas comunes por la que la conexión entre cliente/servidor falle?**

**Algunos de los problemas comunes son:**
- El servidor no se ha iniciado.
- El cliente no puede acceder al servidor.
- El nombre de usuario y la contraseña que ha especificado son incorrectos.
- El usuario no tiene permiso para realizar una operación.
- Se ha cancelado una operación de inicio de sesión durante una operación en curso.

**7. Diferencias entre sockets UDP y TCP**

**TCP:**
- TCP es un protocolo orientado a la conexión. La orientación de conexión significa que los dispositivos de comunicación deben establecer una conexión antes de transmitir datos y deben cerrar la conexión después de transmitir los datos.
- TCP es confiable ya que garantiza la entrega de datos al enrutador de destino.
- TCP proporciona amplios mecanismos de verificación de errores. Esto se debe a que proporciona control de flujo y reconocimiento de datos.
- La secuencia de datos es una característica del Protocolo de Control de Transmisión (TCP). Esto significa que los paquetes llegan en orden al receptor.
- La retransmisión de paquetes perdidos es posible en TCP, pero no en UDP.
- TCP tiene un encabezado de longitud variable (20-80) bytes.
- TCP es utilizado por HTTP, HTTPs, FTP, SMTP y Telnet.

**UDP:**

- UDP es el protocolo orientado a datagramas. Esto se debe a que no hay gastos generales para abrir una conexión, mantener una conexión y finalizar una conexión. UDP es eficiente para el tipo de transmisión y multidifusión de transmisión de red.
- La entrega de datos al destino no se puede garantizar en UDP.
- UDP solo tiene el mecanismo básico de verificación de errores usando sumas de verificación.
- No hay secuencia de datos en UDP. Si se requiere ordenar, debe ser administrado por la capa de aplicación.
- No hay retransmisión de paquetes perdidos en el User Datagram Protocol (UDP).
- UDP tiene un encabezado de longitud fija de 8 bytes.
- UDP es utilizado por DNS, DHCP, TFTP, SNMP, RIP y VoIP.

**8. ¿Diferencia entre sync & async sockets?**\
Sync significa "conectado" o "dependiente" de alguna manera. En otras palabras, dos tareas sincrónicas deben ser conscientes la una de la otra, y una tarea debe ejecutarse de alguna manera que dependa de la otra, como, por ejemplo, esperar a que la otra tarea se haya completado.
Async significa que son totalmente independientes y que ninguno de los dos debe considerar al otro de ninguna manera, ni en la iniciación ni en la ejecución.
