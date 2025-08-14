'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('release', [
      { release_id: 'REL-001', releaseName: 'Version 1.0', releaseDate: '2024-06-01', status: true, project_id: 1, release_type_id: 1 },
      { release_id: 'REL-002', releaseName: 'Version 1.1', releaseDate: '2024-07-01', status: true, project_id: 1, release_type_id: 2 },
      { release_id: 'REL-003', releaseName: 'Version 2.0', releaseDate: '2024-08-01', status: false, project_id: 2, release_type_id: 3 },
      { release_id: 'REL-004', releaseName: 'Hotfix 1.0.1', releaseDate: '2024-06-15', status: true, project_id: 1, release_type_id: 4 },
      { release_id: 'REL-005', releaseName: 'Beta 2.1', releaseDate: '2024-09-01', status: false, project_id: 3, release_type_id: 5 },
      { release_id: 'REL-006', releaseName: 'RC 3.0', releaseDate: '2024-10-01', status: false, project_id: 2, release_type_id: 6 },
      { release_id: 'REL-007', releaseName: 'Major 4.0', releaseDate: '2024-11-01', status: false, project_id: 3, release_type_id: 7 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('release', {
      release_id: ['REL-001', 'REL-002', 'REL-003', 'REL-004', 'REL-005', 'REL-006', 'REL-007']
    });
  }
};