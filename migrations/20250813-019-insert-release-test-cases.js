'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('release_test_case', [
      { release_test_case_id: 'RTC-001', description: 'Login test for release 1.0', test_case_status: 'PASS', test_date: '2024-05-15', test_time: '10:30:00', owner_id: 1, release_id: 1, test_case_id: 1 },
      { release_test_case_id: 'RTC-002', description: 'Password reset test for release 1.0', test_case_status: 'PASS', test_date: '2024-05-16', test_time: '11:00:00', owner_id: 2, release_id: 1, test_case_id: 2 },
      { release_test_case_id: 'RTC-003', description: 'Profile update test for release 1.1', test_case_status: 'FAIL', test_date: '2024-06-15', test_time: '14:30:00', owner_id: 3, release_id: 2, test_case_id: 3 },
      { release_test_case_id: 'RTC-004', description: 'Role assignment test for release 2.0', test_case_status: 'NEW', test_date: '2024-07-15', test_time: '09:00:00', owner_id: 4, release_id: 3, test_case_id: 4 },
      { release_test_case_id: 'RTC-005', description: 'Payment test for hotfix 1.0.1', test_case_status: 'PASS', test_date: '2024-06-10', test_time: '16:00:00', owner_id: 5, release_id: 4, test_case_id: 5 },
      { release_test_case_id: 'RTC-006', description: 'Inventory test for beta 2.1', test_case_status: 'FAIL', test_date: '2024-08-15', test_time: '13:30:00', owner_id: 6, release_id: 5, test_case_id: 6 },
      { release_test_case_id: 'RTC-007', description: 'Analytics test for RC 3.0', test_case_status: 'NEW', test_date: '2024-09-15', test_time: '15:00:00', owner_id: 7, release_id: 6, test_case_id: 7 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('release_test_case', {
      release_test_case_id: ['RTC-001', 'RTC-002', 'RTC-003', 'RTC-004', 'RTC-005', 'RTC-006', 'RTC-007']
    });
  }
};