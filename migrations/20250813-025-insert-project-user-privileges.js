'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('project_user_privilege', [
      { privilege_id: 1, project_id: 1, user_id: 1 },
      { privilege_id: 2, project_id: 1, user_id: 2 },
      { privilege_id: 3, project_id: 2, user_id: 3 },
      { privilege_id: 4, project_id: 2, user_id: 4 },
      { privilege_id: 5, project_id: 3, user_id: 5 },
      { privilege_id: 6, project_id: 3, user_id: 6 },
      { privilege_id: 7, project_id: 4, user_id: 7 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('project_user_privilege', {});
  }
};