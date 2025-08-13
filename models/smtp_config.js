const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const smtp_config = sequelize.define('smtp_config', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  fromEmail: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  fromName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
    password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  smtpHost: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  smtpPort: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },

}, {
  tableName: 'smtp_config',  // exact DB table name
  timestamps: false,          // if you don't have createdAt/updatedAt
});

module.exports = smtp_config;
