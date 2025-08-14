'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('group_privilege', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      privilege_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'privilege',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      role_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'role',
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
    await queryInterface.dropTable('group_privilege');
  }
};
