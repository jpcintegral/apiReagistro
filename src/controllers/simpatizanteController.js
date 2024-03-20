const Simpatizante = require('../models/simpatizante');

// Controlador para crear un nuevo simpatizante
exports.createSimpatizante = async (req, res) => {
  try {
    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      genero,
      edad,
      telefono,
      email,
      fechaNacimiento,
      estado,
      municipio,
      colonia,
      calle,
      numeroCalle,
      seccion,
      codigoPostal,
      comentarioPersonal,
      localidad,
      claveElector,
      folio,
      vigenciaCredencial,
      lat,
      lon
    } = req.body;

    // Crear un nuevo objeto Simpatizante utilizando el modelo
    const newSimpatizante = new Simpatizante({
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      genero,
      edad,
      telefono,
      email,
      fechaNacimiento,
      estado,
      municipio,
      colonia,
      calle,
      numeroCalle,
      seccion,
      codigoPostal,
      comentarioPersonal,
      estatus: 1,
      localidad,
      claveElector,
      folio,
      vigenciaCredencial,
      lat,
      lon,
      fechaRegistro: new Date()
    });

    // Guardar el nuevo simpatizante en la base de datos
    await newSimpatizante.save();

    res.status(201).json({ mensaje: 'Simpatizante creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el simpatizante:', error);
    res.status(500).json({ error: 'Error al crear el simpatizante' });
  }
};

// Controlador para obtener todos los simpatizantes
exports.getSimpatizantes = async (req, res) => {
  try {
    const simpatizantes = await Simpatizante.find({ estatus: 1 });
    res.json(simpatizantes);
  } catch (error) {
    console.error('Error al obtener los simpatizantes:', error);
    res.status(500).json({ error: 'Error al obtener los simpatizantes' });
  }
};

// Controlador para obtener un simpatizante por ID
exports.getSimpatizanteById = async (req, res) => {
  try {
    const { id } = req.params;
    const simpatizante = await Simpatizante.findById(id);
    if (!simpatizante) {
      return res.status(404).json({ error: 'Simpatizante no encontrado' });
    }
    res.json(simpatizante);
  } catch (error) {
    console.error('Error al obtener el simpatizante:', error);
    res.status(500).json({ error: 'Error al obtener el simpatizante' });
  }
};

// Controlador para actualizar un simpatizante por ID
exports.updateSimpatizanteById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFields = req.body;

    const simpatizanteUpdated = await Simpatizante.findByIdAndUpdate(id, updatedFields, { new: true });
    if (!simpatizanteUpdated) {
      return res.status(404).json({ error: 'Simpatizante no encontrado' });
    }
    res.json(simpatizanteUpdated);
  } catch (error) {
    console.error('Error al actualizar el simpatizante:', error);
    res.status(500).json({ error: 'Error al actualizar el simpatizante' });
  }
};

// Controlador para eliminar un simpatizante por ID
exports.deleteSimpatizanteById = async (req, res) => {
  try {
    const { id } = req.params;
    const simpatizanteDeleted = await Simpatizante.findByIdAndDelete(id);

    if (!simpatizanteDeleted) {
      return res.status(404).json({ error: 'Simpatizante no encontrado' });
    }

    res.json({ mensaje: 'Simpatizante eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el simpatizante:', error);
    res.status(500).json({ error: 'Error al eliminar el simpatizante' });
  }
};

exports.desactivarSimpatizanteById = async (req, res) => {
    try {
      const { id } = req.params;
      
      const simpatizanteUpdated = await Simpatizante.findByIdAndUpdate(
        id,
        { $set: { estatus: 2 } },
        { new: true }
      );
  
      if (!simpatizanteUpdated) {
        return res.status(404).json({ error: 'Simpatizante no encontrado' });
      }
  
      res.json({ mensaje: 'Simpatizante desactivado correctamente' });
    } catch (error) {
      console.error('Error al desactivar el simpatizante:', error);
      res.status(500).json({ error: 'Error al desactivar el simpatizante' });
    }
  };
