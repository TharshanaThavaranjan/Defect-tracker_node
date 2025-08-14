'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('role', [
      { id: 1, roleName: 'Developer' },
      { id: 2, roleName: 'QA' }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('role', {
      roleName: ['Developer', 'QA']
    });
  }
};
