const express = require('express');
const { vistaPrincipal } = require('../controllers/PageControllers');
const router = express.Router();

router.get('/', vistaPrincipal);
router.get('/login', vistaPrincipal);

// Aca se pueden agregar mas rutas

module.exports = { routes: router };