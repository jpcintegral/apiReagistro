const mongoose = require('mongoose');

const municipioSchema = new mongoose.Schema({
  idMunicipio: Number,
  nombre: String,
  idEstado: Number
});

const Municipio = mongoose.model('Municipio', municipioSchema);

module.exports = Municipio;
