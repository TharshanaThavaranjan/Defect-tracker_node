const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Import foreign key models
// const Modules  = require('./modules');
// const Project  = require('./project');
// const severity = require('./severity');
// const Sub_module = require('./sub_module');

// const { status } = require('express/lib/response');
// const Severity = require('./severity');

const testcase = sequelize.define('testcase', {
     id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    },
    
    discription: {
        type : DataTypes.STRING,
        allowNull :true,
    },

    steps: {
        type : DataTypes.STRING,
        allowNull: false,
    },
    testcase_id:{
        type: DataTypes.BIGINT,
        allowNull: false
   },
    //     type_id: {
    //      type: DataTypes.BIGINT,
    //      allowNull: false,
    //      references: {
    //          model: 'defect_type',
    //          key: 'id'
    //      }
    //  },
    //      module_id: {
    //      type: DataTypes.BIGINT,
    //      allowNull: false,
    //      references: {
    //          model: 'modules',
    //          key: 'id'
    //      }
    //  },

    //  project_id: {
    //      type: DataTypes.BIGINT,
    //      allowNull: false,
    //      references: {
    //          model: 'project',
    //          key: 'id'
    //      }
    //  },
    // severity_id: {
    //      type: DataTypes.BIGINT,
    //      allowNull: false,
    //      references: {
    //          model: 'severity',
    //          key: 'id'
    //      }
    //  },
    //  sub_module_id: {
    //      type: DataTypes.BIGINT,
    //      allowNull: false,
    //      references: {
    //          model: 'sub_module',
    //          key: 'id'
    //      }
    //  },
     
     
}, {
  tableName: 'testcase',   // Explicit table name
  timestamps: false        // Disable createdAt and updatedAt
});

module.exports = testcase;