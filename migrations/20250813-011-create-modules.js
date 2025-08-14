'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('modules', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      module_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      module_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      project_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'project',
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
    await queryInterface.dropTable('modules');
  }
};
