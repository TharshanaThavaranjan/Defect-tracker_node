const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const ReleaseTestCase = sequelize.define('release_test_case', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  release_test_case_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  test_case_status: {
    type: DataTypes.ENUM('FAIL', 'NEW', 'PASS'),
    allowNull: false,
  },
  test_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  test_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
//   owner_id: {
//     type: DataTypes.BIGINT,
//     allowNull: false,
//   },
//   release_id: {
//     type: DataTypes.BIGINT,
//     allowNull: false,
//   },
//   test_case_id: {
//     type: DataTypes.BIGINT,
//     allowNull: false,
//   },
}, {
  tableName: 'release_test_case',
  timestamps: false
});

module.exports = ReleaseTestCase;