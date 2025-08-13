const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Import foreign key models
// const Project  = require('./project');
// const Role = require('./role');
// const User = require('./User');

const projectallocation = sequelize.define('project_allocation', {
     id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    },

    allocationPercentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },

    endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },

    startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
   
//      project_id:{
//         type: DataTypes.BIGINT,
//         references: {
//             model:'project', // all lowercase
//             key:'id'
//         },
//         allowNull: false
//    },

//      role_id:{
//         type: DataTypes.BIGINT,
//         references: {
//             model:'role', // all lowercase
//             key:'id'
//         },
//         allowNull: false
//    },
   
//      user_id:{
//         type: DataTypes.BIGINT,
//         references: {
//             model:'user', // all lowercase
//             key:'id'
//         },
//         allowNull: false
// }, 
}, {
  tableName: 'project_allocation',   // Explicit table name
  timestamps: false        // Disable createdAt and updatedAt
});

module.exports = projectallocation;