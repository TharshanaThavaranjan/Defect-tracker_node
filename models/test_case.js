const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const TestCase = sequelize.define('test_case', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  steps: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  test_case_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
//   type_id: {
//     type: DataTypes.BIGINT,
//     allowNull: false,
//   },
//   module_id: {
//     type: DataTypes.BIGINT,
//     allowNull: false,
//   },
//   project_id: {
//     type: DataTypes.BIGINT,
//     allowNull: false,
//   },
//   severity_id: {
//     type: DataTypes.BIGINT,
//     allowNull: false,
//   },
//   sub_module_id: {
//     type: DataTypes.BIGINT,
//     allowNull: false,
//   },
}, {
  tableName: 'test_case',
  timestamps: false
});

module.exports = TestCase;
