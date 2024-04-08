const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController');

// Ruta para crear un nuevo usuario
router.post('/user', userController.createUser);

// Ruta para obtener todos los perfiles
router.get('/users', userController.getUsers);

// Ruta para obtener un perfil por ID
router.get('/user/:id', userController.getUserPorId);

// Ruta para actualizar un perfil por ID
router.put('/user/:id', userController.updateUserId);

router.put('/user/desactivar/:id/:userBaja', userController.desactivarUserById);

// Ruta para eliminar un perfil por ID
router.delete('/user/:id', userController.deleteUserPorId);
// Ruta para hacer login
router.post('/login', loginController.login);



module.exports = router;
