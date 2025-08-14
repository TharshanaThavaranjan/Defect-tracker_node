'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('release_type', [
      { Release_type: 'Alpha' },
      { Release_type: 'Beta' },
      { Release_type: 'RC' },
      { Release_type: 'GA' },
      { Release_type: 'Hotfix' },
      { Release_type: 'Patch' },
      { Release_type: 'Major' }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('release_type', {
      Release_type: ['Alpha', 'Beta', 'RC', 'GA', 'Hotfix', 'Patch', 'Major']
    });
  }
};