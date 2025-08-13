const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Priority = sequelize.define('Priority', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
    color:{
      type: DataTypes.STRING
    },
  Priority: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'priority',  // exact DB table name
  timestamps: false,          // if you don't have createdAt/updatedAt
});

module.exports = Priority;
