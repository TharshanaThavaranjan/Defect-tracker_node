const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Defect_type = sequelize.define('defect_type', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  defect_type_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'defect_type',  // exact DB table name
  timestamps: false,          // if you don't have createdAt/updatedAt
});

module.exports = Defect_type;
