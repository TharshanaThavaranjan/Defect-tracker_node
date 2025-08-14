'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('defect_status', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      colorCode: {
        type: Sequelize.STRING
      },
      defectStatus: {
        type: Sequelize.STRING(255),
        allowNull: false
      }
    }, {
      charset: 'utf8mb4'
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('defect_status');
  }
};
