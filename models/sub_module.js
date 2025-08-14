const { DataTypes } = require('sequelize');
const sequelize = require('./../db');

// Import foreign key models
//const Modules = require('./modules');

const sub_module = sequelize.define('sub_module ', {
     id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    },

    submodule_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      submoduleName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      modules_id:{
          type: DataTypes.BIGINT,
          references: {
              model:'modules',
              key:'id'
          },
          allowNull: false
     },
        
}, {
  tableName: 'sub_module',   // Explicit table name
  timestamps: false        // Disable createdAt and updatedAt
});

module.exports = sub_module;