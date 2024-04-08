const mongoose = require('mongoose');

const SimpatizanteSchema = new mongoose.Schema({
  nombre: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  genero: Number,
  edad: Number,
  telefono: String,
  email: String,  
  fechaNacimiento: Date,
  estado: Number,
  municipio: Number,
  colonia: String,
  calle:String,
  numeroCalle: String,
  seccion: String,
  codigoPostal: String, 
  comentarioPersonal: String,
  estatus: Number,  
  seccion: String,
  localidad: String,
  claveElector: String,
  curp: String,
  folio: String,
  vigenciaCredencial: Number,
  lat: String,
  lon: String, 
  imgElectorFrontal : String,
  imgElectorTracera : String,
  idUsuarioAlta: String,
  idUsuarioBaja: String,
  idUsuarioUpdate: String,
  fechaRegistro: Date,
  fechaBaja: Date,
  fechaUpdate: Date,

});


const Simpatizante = mongoose.model('Simpatizante', SimpatizanteSchema);

module.exports = Simpatizante;
