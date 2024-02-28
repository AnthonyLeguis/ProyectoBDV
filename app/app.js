const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const router = require('./routes/router');
const Swal = require('sweetalert2');

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
const bcryptjs = require('bcryptjs');

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

app.get('/register', (req,res) => {
    res.render('registerLayout');
})

//Registros
app.post('/register', async (req, res) => {
    const user = req.body.usuarioRegistro;
    const name = req.body.nameRegistro;
    const pass = req.body.passwordRegistro;
  
    // Hasheamos la contraseña
    let passwordHash = await bcryptjs.hash(pass, 8);
  
    // Insertamos los datos en la tabla login_users
    connection.query('INSERT INTO smgi.login_users (user, name, pass) VALUES (?, ?, ?)', [user, name, passwordHash], async (error, results) => {
      if (error) {
        console.log(error);
      } else {
        setTimeout(() => {
            res.redirect('/');
          }, 2000);
      }

    });
});


app.listen(3000, (req, res)=> {
    console.log('Servidor corriendo en el puerto http://localhost:3000')
});