'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sub_module', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      submodule_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      submoduleName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modules_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'modules',
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
    await queryInterface.dropTable('sub_module');
  }
};
