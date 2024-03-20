const mongoose = require('mongoose');

const estadoSchema = new mongoose.Schema({
  idEstado: Number,
  nombre: String
});

const Estado = mongoose.model('Estado', estadoSchema);

module.exports = Estado;
