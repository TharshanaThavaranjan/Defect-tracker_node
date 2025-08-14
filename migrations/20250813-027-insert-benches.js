'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('bench', [
      { benchid: 'BENCH-001', allocated: 5, availability: 3, user_id: 1 },
      { benchid: 'BENCH-002', allocated: 8, availability: 2, user_id: 2 },
      { benchid: 'BENCH-003', allocated: 6, availability: 4, user_id: 3 },
      { benchid: 'BENCH-004', allocated: 10, availability: 0, user_id: 4 },
      { benchid: 'BENCH-005', allocated: 4, availability: 6, user_id: 5 },
      { benchid: 'BENCH-006', allocated: 7, availability: 3, user_id: 6 },
      { benchid: 'BENCH-007', allocated: 9, availability: 1, user_id: 7 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('bench', {
      benchid: ['BENCH-001', 'BENCH-002', 'BENCH-003', 'BENCH-004', 'BENCH-005', 'BENCH-006', 'BENCH-007']
    });
  }
};