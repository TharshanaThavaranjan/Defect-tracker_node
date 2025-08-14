'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('priority', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      color: {
        type: Sequelize.STRING
      },
      Priority: {
        type: Sequelize.STRING(255),
        allowNull: false
      }
    }, {
      charset: 'utf8mb4'
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('priority');
  }
};
