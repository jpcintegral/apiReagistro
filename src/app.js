// Utilizar funcionalidades del Ecmascript 6
'use strict'
// Cargamos los módulos de express y body-parser
var express = require('express');
var bodyParser = require('body-parser');

const cors = require('cors')



// Importamos las rutas
const userRoutes = require('./routes/userRoutes');
const estadoRoutes = require('./routes/estadoRoutes'); // Importar rutas de estados
const municipioRoutes = require('./routes/municipioRoutes'); // Importar rutas de municipios
const simpatizanteRoutes = require('./routes/simpatizanteRoutes'); // Importar rutas de municipios
// Llamamos a express para poder crear el servidor
var app = express();
//un metodo que se ejecuta antes que llegue a un controlador
// Configuramos body-parser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' })); // Aquí aumentamos el límite de tamaño de carga útil a 50 megabytes

app.use(express.json());
app.use(cors())
// Cargamos las rutas
app.use('/api', userRoutes); // Usar las rutas de User
app.use('/api', estadoRoutes); // Usar las rutas de estados
app.use('/api', municipioRoutes); // Usar las rutas de municipios
app.use('/api', simpatizanteRoutes);  // Usar las rutas de simoatizantes
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;