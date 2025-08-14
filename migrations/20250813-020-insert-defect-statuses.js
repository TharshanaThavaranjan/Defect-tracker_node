'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('defect_status', [
      { defectStatus: 'New', colorCode: '#87CEEB' },
      { defectStatus: 'Open', colorCode: '#ff3333' },
      { defectStatus: 'In Progress', colorCode: '#ffaa00' },
      { defectStatus: 'Resolved', colorCode: '#90EE90' },
      { defectStatus: 'Closed', colorCode: '#33aa33' },
      { defectStatus: 'Rejected', colorCode: '#FF6347' },
      { defectStatus: 'Reopened', colorCode: '#DDA0DD' }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('defect_status', {
      defectStatus: ['New', 'Open', 'In Progress', 'Resolved', 'Closed', 'Rejected', 'Reopened']
    });
  }
};