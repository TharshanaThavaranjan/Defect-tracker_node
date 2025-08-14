'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('privilege', [
      { privilegeName: 'CREATE' },
      { privilegeName: 'READ' },
      { privilegeName: 'UPDATE' },
      { privilegeName: 'DELETE' },
      { privilegeName: 'ADMIN' },
      { privilegeName: 'EXPORT' },
      { privilegeName: 'IMPORT' }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('privilege', {
      privilegeName: ['CREATE', 'READ', 'UPDATE', 'DELETE', 'ADMIN', 'EXPORT', 'IMPORT']
    });
  }
};