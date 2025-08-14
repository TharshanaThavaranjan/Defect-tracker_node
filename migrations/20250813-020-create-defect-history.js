'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('defect_history', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      assigned_by: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      assigned_to: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      defect_date: {
        type: Sequelize.DATE(6),
        allowNull: false
      },
      defect_ref_id: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      defect_status: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      defect_time: {
        type: Sequelize.TIME,
        allowNull: false
      },
      previous_status: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      record_status: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      release_id: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      defect_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'defect',
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
    await queryInterface.dropTable('defect_history');
  }
};
