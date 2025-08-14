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
  type_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'defect_type',
      key: 'id'
    }
  },
  module_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'modules',
      key: 'id'
    }
  },
  project_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'project',
      key: 'id'
    }
  },
  severity_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'severity',
      key: 'id'
    }
  },
  sub_module_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'sub_module',
      key: 'id'
    }
  },
}, {
  tableName: 'test_case',
  timestamps: false
});

module.exports = TestCase;
