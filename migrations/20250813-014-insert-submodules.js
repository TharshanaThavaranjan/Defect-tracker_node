'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('sub_module', [
      { submodule_id: 'SUB-001', submoduleName: 'Login System', modules_id: 1 },
      { submodule_id: 'SUB-002', submoduleName: 'Password Reset', modules_id: 1 },
      { submodule_id: 'SUB-003', submoduleName: 'User Profiles', modules_id: 2 },
      { submodule_id: 'SUB-004', submoduleName: 'Role Management', modules_id: 2 },
      { submodule_id: 'SUB-005', submoduleName: 'Credit Card Processing', modules_id: 3 },
      { submodule_id: 'SUB-006', submoduleName: 'Stock Tracking', modules_id: 4 },
      { submodule_id: 'SUB-007', submoduleName: 'Analytics Dashboard', modules_id: 5 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('sub_module', {
      submodule_id: ['SUB-001', 'SUB-002', 'SUB-003', 'SUB-004', 'SUB-005', 'SUB-006', 'SUB-007']
    });
  }
};