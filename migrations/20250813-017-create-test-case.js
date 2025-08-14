'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('test_case', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      steps: {
        type: Sequelize.STRING,
        allowNull: true
      },
      test_case_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'defect_type',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      module_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'modules',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      project_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'project',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      severity_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'severity',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      sub_module_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'sub_module',
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
    await queryInterface.dropTable('test_case');
  }
};
