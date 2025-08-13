const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Privilege = sequelize.define('Privilege', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  privilegeName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'privilege',  // exact DB table name
  timestamps: false,          // if you don't have createdAt/updatedAt
});

module.exports = Privilege;
