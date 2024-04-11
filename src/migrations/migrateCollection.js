const mongoose = require('mongoose');
const User = require('../models/userModel');

async function migrateCollection() {
    try {
        // Acceder al modelo de usuario para obtener el esquema
        const userModel = new User();
        const userSchema = userModel.schema;

        // Verificar si los campos ya existen en el esquema
        const camposExisten = userSchema.obj.hasOwnProperty('idUsuarioUpdate') &&
            userSchema.obj.hasOwnProperty('fechaBaja') &&
            userSchema.obj.hasOwnProperty('idUsuarioBaja') &&
            userSchema.obj.hasOwnProperty('fechaUpdate');

        // Si los campos no existen en el esquema, realizar la actualización
        if (!camposExisten) {
            // Acceder a la colección MongoDB subyacente
            const collection = mongoose.connection.db.collection(User.collection.name);

            // Realizar la actualización de la estructura de la colección
    
            await collection.updateMany({}, { $set: { idUsuarioBaja: "", idUsuarioUpdate : "",  fechaBaja : null,fechaUpdate:null}});

            console.log('Migración completada exitosamente.');
        } else {
            console.log('Los campos ya existen en el esquema, no se realizó ninguna migración.');
        }
    } catch (error) {
        console.error('Error durante la migración:', error);
    }
}

module.exports = migrateCollection;
