'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('group_privilege', [
      { privilege_id: 1, role_id: 1 },
      { privilege_id: 2, role_id: 1 },
      { privilege_id: 3, role_id: 2 },
      { privilege_id: 4, role_id: 3 },
      { privilege_id: 5, role_id: 4 },
      { privilege_id: 6, role_id: 5 },
      { privilege_id: 7, role_id: 6 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('group_privilege', {});
  }
};
