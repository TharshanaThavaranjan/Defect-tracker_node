'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('severity', [
      { SeverityName: 'Critical', severityColor: '#FF0000', weight: 5 },
      { SeverityName: 'High', severityColor: '#FF6600', weight: 4 },
      { SeverityName: 'Medium', severityColor: '#FFAA00', weight: 3 },
      { SeverityName: 'Low', severityColor: '#FFDD00', weight: 2 },
      { SeverityName: 'Minor', severityColor: '#A3D977', weight: 1 },
      { SeverityName: 'Trivial', severityColor: '#90EE90', weight: 0 },
      { SeverityName: 'Enhancement', severityColor: '#87CEEB', weight: 0 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('severity', {
      SeverityName: ['Critical', 'High', 'Medium', 'Low', 'Minor', 'Trivial', 'Enhancement']
    });
  }
};