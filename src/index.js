// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
const mongoose = require('mongoose');
//const migrateCollection = require('./migrations/migrateCollection');
// *Cargamos el fichero app.js con la configuración de Express
var app = require('./app');

// Configuración de Express
// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
var port = 3800;

// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;

// Conexión a la base de datos de MongoDB

mongoose.connect('mongodb://localhost:27017/registerDB')
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
    // Aquí puedes iniciar tu servidor una vez que se haya establecido la conexión con la base de datos
     // Ejecutar la migración
     /*migrateCollection()
     .then(() => {
         // Iniciar el servidor Express después de completar la migración
         app.listen(port, () => {
           console.log(`Servidor escuchando en el puerto ${port}`);
         });
     })
     .catch((error) => {
         console.error('Error durante la migración:', error);
     });*/

     app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  })
  .catch(error => console.error('Error al conectar a MongoDB:', error));
