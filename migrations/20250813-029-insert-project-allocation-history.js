'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('project_allocation_history', [
      { user_id: 1, project_id: 1, role_id: 1, Percentage: 100, startDate: '2023-01-01', endDate: '2023-12-31', status: false },
      { user_id: 2, project_id: 1, role_id: 2, Percentage: 80, startDate: '2023-02-01', endDate: '2023-11-30', status: false },
      { user_id: 3, project_id: 2, role_id: 3, Percentage: 90, startDate: '2023-03-01', endDate: '2023-10-31', status: false },
      { user_id: 4, project_id: 2, role_id: 4, Percentage: 75, startDate: '2023-04-01', endDate: '2023-09-30', status: false },
      { user_id: 5, project_id: 3, role_id: 5, Percentage: 85, startDate: '2023-05-01', endDate: '2023-08-31', status: false },
      { user_id: 6, project_id: 3, role_id: 6, Percentage: 70, startDate: '2023-06-01', endDate: '2023-07-31', status: false },
      { user_id: 7, project_id: 4, role_id: 7, Percentage: 95, startDate: '2023-07-01', endDate: '2023-12-31', status: true }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('project_allocation_history', {});
  }
};
