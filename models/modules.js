const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const  Project  = require('./project');

const Modules = sequelize.define('modules', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  module_id: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  module_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  // project_id: {
  //   type: DataTypes.BIGINT,
  //   allowNull: false,
  //   references: {
  //     model: Project,
  //     key: 'id',
  //   },
  // },
  },
   {
  tableName: 'modules',   // Explicit table name (should match foreign key reference)
  timestamps: false    // Disable createdAt and updatedA
});

// Association
// Modules.belongsTo(Project, {
//   foreignKey: 'project_id',
//   as: 'project',
// });

module.exports =  Modules ;