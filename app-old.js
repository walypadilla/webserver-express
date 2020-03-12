

const http = require('http');

http.createServer( (req, res) => {

    res.writeHead(200, {'Content-Type': 'aplication/json'} );

    let salida = {
        nombre: 'walter',
        edad: 24,
        ulr: req.url
    }
    res.write(JSON.stringify( salida ));
    res.end();
    // res.write('Hola mundo');
    
})
.listen(8080);

console.log('Escuchando el puerto 8080');