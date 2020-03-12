

const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static( __dirname + '/public' ) );

//Expres HBS
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');
 

app.get('/', (req, res) => {

    res.render( 'home', {
        nombre: 'Walter',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {

    res.render( 'about')
        
});
app.get('/action', (req, res) => {

    res.render( 'action')
        
});

 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puesto ${ port }`);
})