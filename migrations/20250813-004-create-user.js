'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      joindate: {
        type: Sequelize.DATE
      },
      lastName: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      phoneNo: {
        type: Sequelize.STRING
      },
      userGender: {
        type: Sequelize.ENUM('male', 'female')
      },
      userID: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      userStatus: {
        type: Sequelize.ENUM('active','inactive'),
        defaultValue: 'active'
      },
      designation_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'designation',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    }, {
      charset: 'utf8mb4'
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('user');
  }
};


