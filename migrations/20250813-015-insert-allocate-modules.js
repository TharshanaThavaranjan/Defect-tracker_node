'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('allocate_module', [
      { user_id: 1, project_id: 1, modules_id: 1, sub_module_id: 1 },
      { user_id: 2, project_id: 1, modules_id: 2, sub_module_id: 2 },
      { user_id: 3, project_id: 2, modules_id: 3, sub_module_id: 3 },
      { user_id: 4, project_id: 2, modules_id: 4, sub_module_id: 4 },
      { user_id: 5, project_id: 3, modules_id: 5, sub_module_id: 5 },
      { user_id: 6, project_id: 3, modules_id: 6, sub_module_id: 6 },
      { user_id: 7, project_id: 4, modules_id: 7, sub_module_id: 7 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('allocate_module', {});
  }
};