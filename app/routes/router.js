const express = require('express');
const {vistaPrincipal, vistaAdmin, vistaTables} = require('../controllers/PageControllers');
const router = express.Router();

router.get('/', vistaPrincipal);
router.get('/admin', vistaAdmin);
router.get('/tables', vistaTables);

module.exports = { routs: router };