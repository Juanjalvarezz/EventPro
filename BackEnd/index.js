const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./src/routes/userRoutes')

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Rutas
app.use('/api/auth', authRouter);

//Mongo DB
mongoose
.connect('mongodb://localhost:27017/EventPro')
.then(() => console.log('Conectado a la BD'))
.catch((error) => console.log('Fallo al conectar con MongoDb: ', error));

// Global Error
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'An error occurred';
  
    res.status(statusCode).json({
      status: 'error',
      message,
    });
  });
  
// Server
const PORT = 3000;
app.listen (PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
})