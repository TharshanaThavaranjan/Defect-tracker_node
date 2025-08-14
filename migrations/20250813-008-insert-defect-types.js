'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('defect_type', [
      { defect_type_name: 'Bug' },
      { defect_type_name: 'Task' },
      { defect_type_name: 'Improvement' },
      { defect_type_name: 'Feature Request' },
      { defect_type_name: 'Documentation' },
      { defect_type_name: 'Performance' },
      { defect_type_name: 'Security' }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('defect_type', {
      defect_type_name: ['Bug', 'Task', 'Improvement', 'Feature Request', 'Documentation', 'Performance', 'Security']
    });
  }
};