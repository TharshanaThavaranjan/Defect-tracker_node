const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('node_project', 'root', 'Ttharshu30@%', {
    host: 'localhost',
    dialect: 'mysql'
}); 

module.exports = sequelize;