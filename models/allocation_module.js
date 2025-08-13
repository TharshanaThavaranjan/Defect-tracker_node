const { DataTypes } = require('sequelize');
const sequelize = require('./../db');

// Import foreign key models
// const Modules = require('./modules');
// const Project  = require('./project');
// const Sub_module = require('./sub_module');
// const User = require('./User');

const allocation_module = sequelize.define('allocation_module ', {
     id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    },
    
//    module_id:{
//         type: DataTypes.BIGINT,
//         references: {
//             model:'modules',
//             key:'id'
//         },
//         allowNull: false
//    }, 
   
//      project_id:{
//         type: DataTypes.BIGINT,
//         references: {
//             model:'project',
//             key:'id'
//         },
//         allowNull: false
//    },

//     sub_module_id:{
//         type: DataTypes.BIGINT,
//         references: {
//             model:'sub_module', // fixed table name
//             key:'id'
//         },
//         allowNull: true
//    },

//      user_id:{
//         type: DataTypes.BIGINT,
//         references: {
//             model:'user',
//             key:'id'
//         },
//         allowNull: false
//    },
}, {
  tableName: 'allocation_module',   // Explicit table name
  timestamps: false        // Disable createdAt and updatedAt
});

module.exports = allocation_module;