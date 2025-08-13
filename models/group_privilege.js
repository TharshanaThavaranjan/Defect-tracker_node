const { DataTypes } = require('sequelize');
const sequelize = require('./../db');

// Import foreign key models
// const Privilege = require('./privilege');
// const Role = require('./role');

const Group_privilege = sequelize.define('group_privilege ', {
     id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    },
    
//    privilege_id:{
//         type: DataTypes.BIGINT,
//         references: {
//             model:'privilege',
//             key:'id'
//         },
//         allowNull: false
//    }, 
//         role:{
//         type: DataTypes.BIGINT,
//         references: {
//             model:'role',
//             key:'id'
//         },
//         allowNull: false
//    },
}, {
  tableName: 'group_privilege',   // Explicit table name
  timestamps: false        // Disable createdAt and updatedAt
});

module.exports = Group_privilege;