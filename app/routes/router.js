const express = require('express');
const {vistaPrincipal} = require('../controllers/PageControllers');
const router = express.Router();

router.get('/', vistaPrincipal);

module.exports = { routs: router };