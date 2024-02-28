const express = require('express');
const { vistaPrincipal, vistaAdminPanel, vistaRegistro} = require('../controllers/PageControllers');
const router = express.Router();

router.get('/', vistaPrincipal);
router.get('/adminPanel/', vistaAdminPanel);
router.get('/register', vistaRegistro);

// Aca se pueden agregar mas rutas

module.exports = { routes: router };