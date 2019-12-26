const { io } = require('../server')

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarmensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    //Esuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enciarMensaje', data);
        /* if (mensaje.usuario) {
             callback({
                 resp: 'TODO SALIO BIEN!'
             });
         } else {
             callback({
                 resp: 'TODO SALIO MAL!!!!'
             });
         */
        // }

    });

});