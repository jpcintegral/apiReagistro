const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  genero: Number,
  telefono: String,
  email: String,  
  fechaNacimiento: Date,
  estado: Number,
  municipio: Number,
  codigoPostal: String,
  colonia: String,
  comentarioPersonal: String,
  estatus: Number,
  tipoCuenta: Number,
  password: String,
  fechaRegistro: Date

});


const User = mongoose.model('User', userSchema);

module.exports = User;
