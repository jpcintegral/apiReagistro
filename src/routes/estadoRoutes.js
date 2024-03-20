const express = require('express');
const router = express.Router();
const estadoController = require('../controllers/estadoController');

// Ruta para obtener todos los estados
router.get('/estados', estadoController.obtenerEstados);

module.exports = router;
