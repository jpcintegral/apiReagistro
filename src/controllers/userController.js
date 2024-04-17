

const User = require('../models/userModel')
const authenticateToken = require('../helper/authMiddleware');

// Controlador para crear un nuevo perfil
const createUser = async (req, res) => {
  try {
    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      email,
      fechaNacimiento,
      estado,
      municipio,
      codigoPostal,
      colonia,
      comentarioPersonal,
    } = req.body;

    // Crear un nuevo objeto User utilizando el modelo
    const newUser = new User({
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      email,
      fechaNacimiento,
      estado,
      municipio,
      codigoPostal,
      colonia,
      comentarioPersonal,
    });

    // Guardar el nuevo perfil en la base de datos
    await newUser.save()
    .then(() => {
      res.status(200).json({ mensaje: 'Usuario guardado exitosamente' });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error al guardar el usuario' });
    });

    //res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el perfil' });
  }
};

// Controlador para obtener todos los perfiles
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

// Controlador para obtener un perfil por ID
const getUserPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

// Controlador para actualizar un perfil por ID
const updateUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      email,
      fechaNacimiento,
      estado,
      municipio,
      codigoPostal,
      colonia,
      comentarioPersonal,
    } = req.body;

    const userUpdated = await User.findByIdAndUpdate(
      id,
      {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        email,
        fechaNacimiento,
        estado,
        municipio,
        codigoPostal,
        colonia,
        comentarioPersonal,
      },
      { new: true }
    );

    if (!userUpdated) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(userUpdated);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

// Controlador para eliminar un perfil por ID
const deleteUserPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const userDelete = await User.findByIdAndDelete(id);

    if (!userDelete) {
      return res.status(404).json({ error: 'Usurio no encontrado' });
    }

    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};

module.exports = {
  createUser: [authenticateToken, createUser],
  getUsers: [authenticateToken, getUsers],
  getUserPorId: [authenticateToken, getUserPorId],
  updateUserId: [authenticateToken, updateUserId],
  deleteUserPorId: [authenticateToken, deleteUserPorId],
  desactivarUserById: [authenticateToken, desactivarUserById]
};

