'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('project', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      client_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      country: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      end_date: {
        type: Sequelize.DATE(6),
        allowNull: false
      },
      kloc: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      phone_no: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      project_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      project_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      project_status: {
        type: Sequelize.ENUM('ACTIVE', 'COMPLETED', 'INACTIVE', 'ON_HOLD'),
        defaultValue: 'ACTIVE',
        allowNull: false
      },
      start_date: {
        type: Sequelize.DATE(6),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'user',
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
    await queryInterface.dropTable('project');
  }
};
