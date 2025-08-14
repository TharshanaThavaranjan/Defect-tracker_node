'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('smtp_config', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fromEmail: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      fromName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      smtpHost: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      smtpPort: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      userName: {
        type: Sequelize.STRING(255),
        allowNull: false
      }
    }, {
      charset: 'utf8mb4'
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('smtp_config');
  }
};
