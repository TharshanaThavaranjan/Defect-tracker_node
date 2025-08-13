const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Import foreign key models
// const Project  = require('./project');
// const Role = require('./role');
// const User = require('./User');


const ProjectAllocationHistory = sequelize.define('project_allocation_history', {
     id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    },
    
    endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },

    Percentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },

    startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },

    status: {
        type: DataTypes.BOOLEAN,
        allowNull:false,
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
  tableName: 'project_allocation_history',   // Explicit table name
  timestamps: false        // Disable createdAt and updatedAt
});

module.exports = ProjectAllocationHistory;