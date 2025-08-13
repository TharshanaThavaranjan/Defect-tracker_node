const { DataTypes } = require('sequelize');
const sequelize = require('./../db');

const user = sequelize.define('user', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    joindate: {
        type: DataTypes.DATE
    },
    lastName: {
        type: DataTypes.STRING
    },
   password: {
        type: DataTypes.STRING
   },
   phoneNo: {
        type: DataTypes.STRING
   },
   userGender: {
        type: DataTypes.ENUM('male','female')
   },
   userID: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
   },
   userStatus: {
        type: DataTypes.ENUM('active','inactive'),
        defaultValue:'active'
   },
//    designation_id:{
//         type: DataTypes.BIGINT,
//         references: {
//             model:'designation',
//             key:'id'
//         },
//         allowNull: true
//    },   
}, {
  tableName: 'user',   // Explicit table name
  timestamps: false        // Disable createdAt and updatedAt
});

module.exports = user;