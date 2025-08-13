const { DataTypes } = require('sequelize');
const sequelize = require('./../db');

// Import foreign key models
// const Defect = require('./defect');
// const User = require('./User');

const Comments = sequelize.define('comments', { // removed space
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  attachment: {
    type: DataTypes.STRING,
    allowNull: true, // allow null for flexibility
  },
  comment: { // lowercase for consistency
    type: DataTypes.STRING,
    allowNull: true,
  },
//   defect_id: { // lowercase snake_case
//     type: DataTypes.BIGINT,
//     references: {
//       model: 'defect',
//       key: 'id'
//     },
//     allowNull: false
//   },
//   user_id: { // lowercase snake_case
//     type: DataTypes.BIGINT,
//     references: {
//       model: 'user',
//       key: 'id'
//     },
//     allowNull: false
//   },
}, {
  tableName: 'comments',
  timestamps: false
});

// Associations
// Comments.belongsTo(Defect, {
//   foreignKey: 'defect_id',
//   as: 'Defect',
// });

// Comments.belongsTo(User, {
//   foreignKey: 'user_id',
//   as: 'User',
// });

module.exports = Comments;