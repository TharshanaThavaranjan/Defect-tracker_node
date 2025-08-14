'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('user', [
      {
        email: 'alice@example.com',
        firstName: 'Alice',
        lastName: 'Doe',
        userID: 'EMP001',
        userStatus: 'active',
        userGender: 'female',
        designation_id: 1
      },
      {
        email: 'bob@example.com',
        firstName: 'Bob',
        lastName: 'Smith',
        userID: 'EMP002',
        userStatus: 'active',
        userGender: 'male',
        designation_id: 2
      },
      {
        email: 'charlie@example.com',
        firstName: 'Charlie',
        lastName: 'Johnson',
        userID: 'EMP003',
        userStatus: 'active',
        userGender: 'male',
        designation_id: 3
      },
      {
        email: 'diana@example.com',
        firstName: 'Diana',
        lastName: 'Wilson',
        userID: 'EMP004',
        userStatus: 'active',
        userGender: 'female',
        designation_id: 4
      },
      {
        email: 'edward@example.com',
        firstName: 'Edward',
        lastName: 'Brown',
        userID: 'EMP005',
        userStatus: 'active',
        userGender: 'male',
        designation_id: 5
      },
      {
        email: 'fiona@example.com',
        firstName: 'Fiona',
        lastName: 'Davis',
        userID: 'EMP006',
        userStatus: 'active',
        userGender: 'female',
        designation_id: 6
      },
      {
        email: 'george@example.com',
        firstName: 'George',
        lastName: 'Miller',
        userID: 'EMP007',
        userStatus: 'active',
        userGender: 'male',
        designation_id: 7
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('user', {
      userID: ['EMP001', 'EMP002', 'EMP003', 'EMP004', 'EMP005', 'EMP006', 'EMP007']
    });
  }
};
