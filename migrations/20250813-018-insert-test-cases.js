'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('test_case', [
      { test_case_id: 'TC-001', description: 'Login functionality test', steps: 'Enter credentials and verify login', project_id: 1, module_id: 1, sub_module_id: 1, severity_id: 1, type_id: 1 },
      { test_case_id: 'TC-002', description: 'Password reset test', steps: 'Request password reset and verify email', project_id: 1, module_id: 1, sub_module_id: 2, severity_id: 2, type_id: 2 },
      { test_case_id: 'TC-003', description: 'User profile update test', steps: 'Update profile information and save', project_id: 1, module_id: 2, sub_module_id: 3, severity_id: 3, type_id: 3 },
      { test_case_id: 'TC-004', description: 'Role assignment test', steps: 'Assign role to user and verify permissions', project_id: 2, module_id: 2, sub_module_id: 4, severity_id: 4, type_id: 4 },
      { test_case_id: 'TC-005', description: 'Payment processing test', steps: 'Process payment and verify transaction', project_id: 1, module_id: 3, sub_module_id: 5, severity_id: 5, type_id: 5 },
      { test_case_id: 'TC-006', description: 'Inventory tracking test', steps: 'Track inventory changes and verify accuracy', project_id: 2, module_id: 4, sub_module_id: 6, severity_id: 6, type_id: 6 },
      { test_case_id: 'TC-007', description: 'Analytics dashboard test', steps: 'Generate reports and verify data accuracy', project_id: 2, module_id: 5, sub_module_id: 7, severity_id: 7, type_id: 7 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('test_case', {
      test_case_id: ['TC-001', 'TC-002', 'TC-003', 'TC-004', 'TC-005', 'TC-006', 'TC-007']
    });
  }
};