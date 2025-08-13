const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  roleName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'role',  // exact DB table name
  timestamps: false,          // if you don't have createdAt/updatedAt
});

module.exports = Role;
