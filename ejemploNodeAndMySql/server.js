const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Configura la conexión a la base de datos
// los datos de conexión deben ser iguales a
// los del archivo docker-compose.yml
const sequelize = new Sequelize('db', 'user', '123456789', {
  host: 'db',
  dialect: 'mysql',
});


// Define un modelo simple para una tabla llamada "Users"
const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Crea la tabla "Users" en la base de datos si no existe
sequelize.sync().then(() => {
  console.log('La tabla "Users" ha sido creada en la base de datos.');
});

// Crea una instancia de la aplicación Express
const app = express();

// Define una ruta para obtener todos los usuarios
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});

// Inicia el servidor en el puerto 3000
// puerto debe ser igual al del archivo docker-compose.yml
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
