const Municipio = require('../models/municipioModel');


exports.obtenerMunicipios = async (req, res) => {
  try {
    const municipio = await Municipio.find();
    res.json(municipio);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener municipios' });
  }
};

exports.obtenerMunicipiosPorEstado = async (req, res) => {
  const { idEstado } = req.params;
  try {
    const municipios = await Municipio.find({ idEstado: parseInt(idEstado) });
    res.json(municipios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener municipios' });
  }
};
