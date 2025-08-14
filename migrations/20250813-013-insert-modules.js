'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('modules', [
      { module_id: 'MOD-001', module_name: 'Authentication', project_id: 1 },
      { module_id: 'MOD-002', module_name: 'User Management', project_id: 1 },
      { module_id: 'MOD-003', module_name: 'Payment Processing', project_id: 1 },
      { module_id: 'MOD-004', module_name: 'Inventory Control', project_id: 2 },
      { module_id: 'MOD-005', module_name: 'Reporting', project_id: 2 },
      { module_id: 'MOD-006', module_name: 'Mobile Interface', project_id: 3 },
      { module_id: 'MOD-007', module_name: 'Security Layer', project_id: 3 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('modules', {
      module_id: ['MOD-001', 'MOD-002', 'MOD-003', 'MOD-004', 'MOD-005', 'MOD-006', 'MOD-007']
    });
  }
};