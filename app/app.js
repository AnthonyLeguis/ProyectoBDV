const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const router = require('./routes/router');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

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
const { log } = require('console');

//Uso del router
app.use(router.routes);

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

//Autenticacion
app.post('/auth', async (req, res) => {
    const name = req.body.name;
    const pass = req.body.pass;

    let passwordHash = await bcryptjs.hash(pass, 8);
  
    if (name && pass) {
      connection.query('SELECT * FROM smgi.login_users WHERE name = ?', [name], async (error, results) => {
        if (results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))) {
          res.status(401).send({ mensaje: 'USUARIO Y/O PASSWORD INCORRECTAS'});
          return;
        } else {
          req.session.name = results[0].name;
          req.session.loggedin = true;
          res.status(200).send({ mensaje: 'LOGIN CORRECTO' });
        }
      });
    } else {
      res.send({ mensaje: 'Por favor ingrese un usuario y/o contraseña' });
    }
});

//session
app.get('/', (req, res) => {
    if(req.session.loggedin){
        res.render('adminPanel', {
            login: true,
            name: req.session.name
        });
    } else {
        res.render('adminPanel', {
            login: false,
            name: 'Debe iniciar sesion'
        })
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})


app.listen(3000, (req, res)=> {
    console.log('Servidor corriendo en el puerto http://localhost:3000')
});