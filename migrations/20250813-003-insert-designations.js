'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('designation', [
      { designation: 'Software Engineer' },
      { designation: 'Senior Software Engineer' },
      { designation: 'QA Engineer' },
      { designation: 'Project Manager' }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('designation', {
      designation: [
        'Software Engineer',
        'Senior Software Engineer',
        'QA Engineer',
        'Project Manager'
      ]
    });
  }
};


