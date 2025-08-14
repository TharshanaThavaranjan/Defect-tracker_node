'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('role', [
      { roleName: 'Developer' },
      { roleName: 'QA' },
      { roleName: 'Team Lead' },
      { roleName: 'Project Manager' },
      { roleName: 'DevOps' },
      { roleName: 'Business Analyst' },
      { roleName: 'Architect' }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('role', {
      roleName: ['Developer', 'QA', 'Team Lead', 'Project Manager', 'DevOps', 'Business Analyst', 'Architect']
    });
  }
};
