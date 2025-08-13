const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Adjust the path if needed
//const User = require('./User');     // Adjust if the path is different

const Bench = sequelize.define('bench', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  allocated: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  availability: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  benchid: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  // user_id: {
  //   type: DataTypes.BIGINT,
  //   allowNull: false,
  //   references: {
  //     model: 'user',  // This must match the *table name* in DB
  //     key: 'id',
  //   },
  // },
}, {
  tableName: 'bench',  // 👈 use actual table name as per your DB
  timestamps: false,
});

// Setup association
// Bench.belongsTo(User, {
//   foreignKey: 'user_id',
//   as: 'user', // This is the alias to use when including
// });

module.exports = Bench;
