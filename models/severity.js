const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const severity = sequelize.define('Severity', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
    severityColor:{
      type: DataTypes.STRING
    },
  SeverityName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
    weight: {
        type: DataTypes.INTEGER(15)
    },
}, {
  tableName: 'severity',  // exact DB table name
  timestamps: false,          // if you don't have createdAt/updatedAt
});

module.exports = severity;
