const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const ReleaseTestCase = sequelize.define('release_test_case', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  discription: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Release_testcaseID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  testcaseStatus: {
    type: DataTypes.ENUM('FAIL', 'NEW', 'PASS'),
    allowNull: false,
  },
  testDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  testTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  // owner_id: {
  //   type: DataTypes.BIGINT,
  //   allowNull: false,
  // },
  // release_id: {
  //   type: DataTypes.BIGINT,
  //   allowNull: false,
  // },
  // test_case_id: {
  //   type: DataTypes.BIGINT,
  //   allowNull: false,
  // },
}, {
  tableName: 'release_test_case',
  timestamps: false
});

module.exports = ReleaseTestCase;