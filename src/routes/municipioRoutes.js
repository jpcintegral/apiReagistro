const express = require('express');
const router = express.Router();
const municipioController = require('../controllers/municipioController');

// Ruta para obtener municipios por estado
router.get('/municipios/:idEstado', municipioController.obtenerMunicipiosPorEstado);

module.exports = router;
