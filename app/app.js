const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const router = require('./routes/router')

const app = express()

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static(path.join(__dirname, 'public')))

//Uso del router
app.use(router.routs)

app.get('/', (req, res) => {
    res.render('home', { layout: 'main' }); // **Especificacion el layout a usar**
});

app.get('/login', (req, res) => {
    res.render('login', { layout: 'login' }); // **Especificacion el layout a usar**
});

app.listen(3000, ()=> {
    console.log('Servidor corriendo en el puerto http://localhost:3000')
})