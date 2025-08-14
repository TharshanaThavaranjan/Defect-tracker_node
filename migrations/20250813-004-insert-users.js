'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('user', [
      {
        id: 1,
        email: 'alice@example.com',
        firstName: 'Alice',
        lastName: 'Doe',
        userID: 'EMP001',
        userStatus: 'active',
        userGender: 'female',
        designation_id: 1
      },
      {
        id: 2,
        email: 'bob@example.com',
        firstName: 'Bob',
        lastName: 'Smith',
        userID: 'EMP002',
        userStatus: 'active',
        userGender: 'male',
        designation_id: 2
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('user', {
      userID: ['EMP001', 'EMP002']
    });
  }
};
