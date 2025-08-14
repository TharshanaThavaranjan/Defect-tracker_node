'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('comments', [
      { comment: 'This issue needs immediate attention', attachment: null, defect_id: 1, user_id: 1 },
      { comment: 'Working on reproducing the issue', attachment: 'debug_log.txt', defect_id: 2, user_id: 2 },
      { comment: 'Found the root cause in the upload module', attachment: null, defect_id: 3, user_id: 3 },
      { comment: 'Testing the fix in staging environment', attachment: 'test_results.pdf', defect_id: 4, user_id: 4 },
      { comment: 'Payment gateway configuration updated', attachment: null, defect_id: 5, user_id: 5 },
      { comment: 'Inventory sync process needs optimization', attachment: 'performance_report.xlsx', defect_id: 6, user_id: 6 },
      { comment: 'Analytics algorithm requires revision', attachment: null, defect_id: 7, user_id: 7 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('comments', {});
  }
};