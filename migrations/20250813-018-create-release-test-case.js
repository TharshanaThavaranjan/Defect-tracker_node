'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('release_test_case', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      release_test_case_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      test_case_status: {
        type: Sequelize.ENUM('FAIL', 'NEW', 'PASS'),
        allowNull: false
      },
      test_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      test_time: {
        type: Sequelize.TIME,
        allowNull: false
      },
      owner_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      release_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'release',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      test_case_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'test_case',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    }, {
      charset: 'utf8mb4'
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('release_test_case');
  }
};
