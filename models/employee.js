const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const employee = sequelize.define('employee', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
});

module.exports = employee;