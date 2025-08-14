'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('severity', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      severityColor: {
        type: Sequelize.STRING
      },
      SeverityName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      weight: {
        type: Sequelize.INTEGER(15)
      }
    }, {
      charset: 'utf8mb4'
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('severity');
  }
};
