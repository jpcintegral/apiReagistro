const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  email: String,
  fechaNacimiento: Date,
  estado: String,
  municipio: String,
  codigoPostal: String,
  colonia: String,
  comentarioPersonal: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
