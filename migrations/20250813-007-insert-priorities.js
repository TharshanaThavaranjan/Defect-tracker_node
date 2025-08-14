'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('priority', [
      { Priority: 'Critical', color: '#FF0000' },
      { Priority: 'High', color: '#EF476F' },
      { Priority: 'Medium', color: '#FFD166' },
      { Priority: 'Low', color: '#A3D977' },
      { Priority: 'Trivial', color: '#90EE90' },
      { Priority: 'Enhancement', color: '#87CEEB' },
      { Priority: 'Feature', color: '#DDA0DD' }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('priority', {
      Priority: ['Critical', 'High', 'Medium', 'Low', 'Trivial', 'Enhancement', 'Feature']
    });
  }
};