'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('privilege', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      privilegeName: {
        type: Sequelize.STRING(255),
        allowNull: false
      }
    }, {
      charset: 'utf8mb4'
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('privilege');
  }
};
