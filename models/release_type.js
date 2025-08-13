const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const release_type = sequelize.define('release_type', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  Release_type: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'release_type',  // exact DB table name
  timestamps: false,          // if you don't have createdAt/updatedAt
});

module.exports = release_type;
