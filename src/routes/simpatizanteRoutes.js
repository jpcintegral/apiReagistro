const express = require('express');
const router = express.Router();
const simpatizanteController = require('../controllers/simpatizanteController');

// Ruta para crear un nuevo simpatizante
router.post('/simpatizantes', simpatizanteController.createSimpatizante);

// Ruta para obtener todos los simpatizantes
router.get('/simpatizantes', simpatizanteController.getSimpatizantes);

// Ruta para obtener un simpatizante por ID
router.get('/simpatizantes/:id', simpatizanteController.getSimpatizanteById);

// Ruta para actualizar un simpatizante por ID
router.put('/simpatizantes/:id', simpatizanteController.updateSimpatizanteById);

// Ruta para eliminar un simpatizante por ID
router.delete('/simpatizantes/:id', simpatizanteController.deleteSimpatizanteById);

// Ruta para desactivar un simpatizante por ID
router.put('/simpatizantes/desactivar/:id/:userBaja', simpatizanteController.desactivarSimpatizanteById);

module.exports = router;
