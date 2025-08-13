const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const AllocateModule = sequelize.define('allocate_module', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  project_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  modules_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  sub_module_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  // ...add other fields as needed...
}, {
  tableName: 'allocate_module',
  timestamps: false
});

module.exports = AllocateModule;
