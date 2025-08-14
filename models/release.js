const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Release = sequelize.define('release', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  release_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  project_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'project',
      key: 'id'
    }
  },
  release_type_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'release_type',
      key: 'id'
    }
  }
}, {
  tableName: 'release',
  timestamps: false
});

module.exports = Release;