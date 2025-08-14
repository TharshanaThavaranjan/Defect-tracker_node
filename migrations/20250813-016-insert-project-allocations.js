'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('project_allocation', [
      { user_id: 1, project_id: 1, role_id: 1, allocationPercentage: 100, startDate: '2024-01-01', endDate: '2024-12-31' },
      { user_id: 2, project_id: 1, role_id: 2, allocationPercentage: 80, startDate: '2024-01-01', endDate: '2024-12-31' },
      { user_id: 3, project_id: 2, role_id: 3, allocationPercentage: 90, startDate: '2024-02-01', endDate: '2024-11-30' },
      { user_id: 4, project_id: 2, role_id: 4, allocationPercentage: 75, startDate: '2024-02-01', endDate: '2024-11-30' },
      { user_id: 5, project_id: 3, role_id: 5, allocationPercentage: 85, startDate: '2024-03-01', endDate: '2025-02-28' },
      { user_id: 6, project_id: 3, role_id: 6, allocationPercentage: 70, startDate: '2024-03-01', endDate: '2025-02-28' },
      { user_id: 7, project_id: 4, role_id: 7, allocationPercentage: 95, startDate: '2024-04-01', endDate: '2025-03-31' }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('project_allocation', {});
  }
};