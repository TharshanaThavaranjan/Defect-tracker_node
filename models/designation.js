const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const designation = sequelize.define('designation', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  designation: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'designation',  // exact DB table name
  timestamps: false,          // if you don't have createdAt/updatedAt
});

module.exports = designation;
