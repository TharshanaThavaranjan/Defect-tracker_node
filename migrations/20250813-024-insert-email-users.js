'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('email_user', [
      { defect_email_status: true, module_allocation_email_status: true, project_allocation_email_status: true, submodule_allocation_email_status: false, user_id: 1 },
      { defect_email_status: false, module_allocation_email_status: true, project_allocation_email_status: true, submodule_allocation_email_status: true, user_id: 2 },
      { defect_email_status: true, module_allocation_email_status: false, project_allocation_email_status: true, submodule_allocation_email_status: true, user_id: 3 },
      { defect_email_status: true, module_allocation_email_status: true, project_allocation_email_status: false, submodule_allocation_email_status: true, user_id: 4 },
      { defect_email_status: false, module_allocation_email_status: false, project_allocation_email_status: true, submodule_allocation_email_status: true, user_id: 5 },
      { defect_email_status: true, module_allocation_email_status: true, project_allocation_email_status: true, submodule_allocation_email_status: false, user_id: 6 },
      { defect_email_status: false, module_allocation_email_status: true, project_allocation_email_status: false, submodule_allocation_email_status: true, user_id: 7 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('email_user', {});
  }
};