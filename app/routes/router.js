const express = require('express');
const { vistaPrincipal, vistaAdminPanel } = require('../controllers/PageControllers');
const router = express.Router();

router.get('/', vistaPrincipal);
router.get('/adminPanel/', vistaAdminPanel);

// Aca se pueden agregar mas rutas

module.exports = { routes: router };