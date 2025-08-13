const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const  User  = require('./User');

const Email_user = sequelize.define('email_user', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  defect_email_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,

  },
  module_allocation_email_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  project_allocation_email_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
    submodule_allocation_email_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  //  user_id:{
  //       type: DataTypes.BIGINT,
  //       references: {
  //           model:'User',
  //           key:'id'
  //       },
  //       allowNull: false
  //  },   
  

}, {
  tableName: 'email_user',  // exact DB table name
  timestamps: false,          // if you don't have createdAt/updatedAt
});

// Association
// Email_user.belongsTo(User, {
//   foreignKey: 'user_id',
//   as: 'user',
// });

module.exports = Email_user;
