const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Defect_status = sequelize.define('Defect_status', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
    colorCode:{
      type: DataTypes.STRING
    },
  defectStatus: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'defect_status',  // exact DB table name
  timestamps: false,          // if you don't have createdAt/updatedAt
});

module.exports = Defect_status;
