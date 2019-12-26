var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');
});

//escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor ');
});

//Enviar Informacion
socket.emit('enviarMensaje', {
    usuario: 'Diego',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);
})