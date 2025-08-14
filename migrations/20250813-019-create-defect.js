'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('defect', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      attachment: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      defect_id: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      re_open_count: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      steps: {
        type: Sequelize.STRING(1000),
        allowNull: false
      },
      assigned_by: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'user',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      assigned_to: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'user',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      defect_status_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'defect_status',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      type_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'defect_type',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      modules_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'modules',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      priority_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'priority',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
      },
      release_test_case_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'release_test_case',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      severity_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'severity',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      sub_module_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'sub_module',
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
    await queryInterface.dropTable('defect');
  }
};
