const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_project', 'root', 'Ttharshu30@%', {
  host: 'localhost',
  dialect: 'mysql' // or 'postgres', 'sqlite', etc.
});

module.exports = sequelize;