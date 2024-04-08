// loginController.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
require('dotenv').config();


exports.login = async (req, res) => {
  try {
    const secretKey = process.env.APP_SECRET_KEY; 
    const token = req.body.token; // Aquí asumo que el token JWT se pasa en el cuerpo de la solicitud
    console.error('Body:', req.body);
    console.log('key:',process.env.APP_SECRET_KEY);
    // Verificar si el token está presente
    if (!token) {
      return res.status(400).json({ error: 'Token no proporcionado' });
    }

    // Verificar y decodificar el token JWT
    const decodedToken = jwt.verify(token, secretKey);

    // Extraer usuario y contraseña del token
    const { email, password } = decodedToken;
    console.log('Migración completada exitosamente. ' +email, password);
    // Buscar el usuario en la base de datos por email
    const user = await User.findOne({ email });

    // Verificar si el usuario existe
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
  console.log(user);
    // Verificar la contraseña
   // const isPasswordValid = await bcrypt.compare(password, user.password);
    const isPasswordValid= user.password === password;
 console.log("isPasswordValid",isPasswordValid);
    // Si la contraseña no coincide, devuelve un error
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Si el usuario y la contraseña son válidos, devuelve el perfil del usuario
    
    res.json({ user:user._id, perfil: user.tipoCuenta, nombreCompleto: `${user.nombre} ${user.apellidoPaterno} ${user.apellidoMaterno}` });

  } catch (error) {
    console.error('Error en el controlador de inicio de sesión:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};
