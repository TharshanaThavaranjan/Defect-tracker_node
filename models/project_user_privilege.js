const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Import foreign key models
// const Privilege = require('./privilege');
// const Project  = require('./project');
// const User = require('./User');

const projectuserprivilege = sequelize.define('project_user_privilege', {
     id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    },
    
  //  privilege_id:{
  //       type: DataTypes.BIGINT,
  //       references: {
  //           model:'privilege', // all lowercase
  //           key:'id'
  //       },
  //       allowNull: false
  //  }, 
   
  //    project_id:{
  //       type: DataTypes.BIGINT,
  //       references: {
  //           model:'project', // all lowercase
  //           key:'id'
  //       },
  //       allowNull: false
  //  },

  //    user_id:{
  //       type: DataTypes.BIGINT,
  //       references: {
  //           model:'user', // all lowercase
  //           key:'id'
  //       },
  //       allowNull: false
  //  },
}, {
  tableName: 'project_user_privilege',   // Explicit table name
  timestamps: false        // Disable createdAt and updatedAt
});

module.exports = projectuserprivilege;