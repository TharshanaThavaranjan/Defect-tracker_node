'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('defect', [
      { defect_id: 'DEF-001', description: 'Login button not working', steps: 'Click login button and observe error', attachment: null, re_open_count: 0, assigned_by: 1, assigned_to: 2, defect_status_id: 1, type_id: 1, modules_id: 1, priority_id: 1, project_id: 1, release_test_case_id: 1, severity_id: 1, sub_module_id: 1 },
      { defect_id: 'DEF-002', description: 'Password reset email not sent', steps: 'Request password reset and check email', attachment: null, re_open_count: 1, assigned_by: 2, assigned_to: 3, defect_status_id: 2, type_id: 2, modules_id: 1, priority_id: 2, project_id: 1, release_test_case_id: 2, severity_id: 2, sub_module_id: 2 },
      { defect_id: 'DEF-003', description: 'Profile image upload fails', steps: 'Upload image and observe error message', attachment: 'screenshot.png', re_open_count: 0, assigned_by: 3, assigned_to: 4, defect_status_id: 3, type_id: 3, modules_id: 2, priority_id: 3, project_id: 1, release_test_case_id: 3, severity_id: 3, sub_module_id: 3 },
      { defect_id: 'DEF-004', description: 'Role permissions not applied', steps: 'Assign role and test permissions', attachment: null, re_open_count: 2, assigned_by: 4, assigned_to: 5, defect_status_id: 4, type_id: 4, modules_id: 2, priority_id: 4, project_id: 2, release_test_case_id: 4, severity_id: 4, sub_module_id: 4 },
      { defect_id: 'DEF-005', description: 'Payment gateway timeout', steps: 'Process payment and observe timeout', attachment: 'error_log.txt', re_open_count: 0, assigned_by: 5, assigned_to: 6, defect_status_id: 5, type_id: 5, modules_id: 3, priority_id: 5, project_id: 1, release_test_case_id: 5, severity_id: 5, sub_module_id: 5 },
      { defect_id: 'DEF-006', description: 'Inventory count mismatch', steps: 'Update inventory and verify count', attachment: null, re_open_count: 1, assigned_by: 6, assigned_to: 7, defect_status_id: 6, type_id: 6, modules_id: 4, priority_id: 6, project_id: 2, release_test_case_id: 6, severity_id: 6, sub_module_id: 6 },
      { defect_id: 'DEF-007', description: 'Analytics report incorrect data', steps: 'Generate report and verify data accuracy', attachment: 'report_error.pdf', re_open_count: 0, assigned_by: 7, assigned_to: 1, defect_status_id: 7, type_id: 7, modules_id: 5, priority_id: 7, project_id: 2, release_test_case_id: 7, severity_id: 7, sub_module_id: 7 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('defect', {
      defect_id: ['DEF-001', 'DEF-002', 'DEF-003', 'DEF-004', 'DEF-005', 'DEF-006', 'DEF-007']
    });
  }
};