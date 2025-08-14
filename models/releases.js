const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Import foreign key models
// const Project  = require('./project');
// const Release_type =require('./release_type');

const release = sequelize.define('release', {
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
   
//      project_id:{
//         type: DataTypes.BIGINT,
//         references: {
//             model:'project', // all lowercase
//             key:'id'
//         },
//         allowNull: false
//    },
   
//      Release_type_id:{
//         type: DataTypes.BIGINT,
//         references: {
//             model:'release_type', // all lowercase
//             key:'id'
//         },
//         allowNull: false
// }, 
}, {
  tableName: 'release',   // Explicit table name
  timestamps: false        // Disable createdAt and updatedAt
});

module.exports = release;