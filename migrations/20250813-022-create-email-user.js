'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('email_user', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      defect_email_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      module_allocation_email_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      project_allocation_email_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      submodule_allocation_email_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'user',
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
    await queryInterface.dropTable('email_user');
  }
};
