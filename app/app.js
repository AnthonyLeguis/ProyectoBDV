const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const router = require('./routes/router');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config({path: './env/.env'});


// directorio public
app.use(express.static(path.join(__dirname, '/public')));

//Motor de plantilla
app.set('view engine', 'ejs');
app.use(expressLayouts);

//bcrypt para las contrasenas
const bcrypt = require('bcryptjs');

//Variables de sessions
const session = require('express-session')
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Modulo de conexion a la bd
const connection = require('./database/db');

//Uso del router
app.use(router.routes);

app.listen(3000, (req, res)=> {
    console.log('Servidor corriendo en el puerto http://localhost:3000')
});