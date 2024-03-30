const express = require('express');
const cors = require('cors');
require('dotenv').config();
//Conexion base de datos
require('./config/database');

// Importar Rutas
const authRouter = require('./routes/userRoutes')

const app = express();
// PUERTO
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(cors());
app.use(express.json());

//Rutas
app.use('/api/auth', authRouter);

/*
// Global Error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'An error occurred';
  
  res.status(statusCode).json({
    status: 'error',
    message,
  });
});
*/

module.exports = app;