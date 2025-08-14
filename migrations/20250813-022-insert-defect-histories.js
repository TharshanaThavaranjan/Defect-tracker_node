'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('defect_history', [
      { assigned_by: 'Alice Doe', assigned_to: 'Bob Smith', defect_date: '2024-05-01', defect_ref_id: 'DEF-001', defect_status: 'New', defect_time: '10:00:00', previous_status: 'None', record_status: 'Active', release_id: 1, defect_id: 1 },
      { assigned_by: 'Bob Smith', assigned_to: 'Charlie Johnson', defect_date: '2024-05-02', defect_ref_id: 'DEF-002', defect_status: 'Open', defect_time: '11:00:00', previous_status: 'New', record_status: 'Active', release_id: 1, defect_id: 2 },
      { assigned_by: 'Charlie Johnson', assigned_to: 'Diana Wilson', defect_date: '2024-05-03', defect_ref_id: 'DEF-003', defect_status: 'In Progress', defect_time: '12:00:00', previous_status: 'Open', record_status: 'Active', release_id: 2, defect_id: 3 },
      { assigned_by: 'Diana Wilson', assigned_to: 'Edward Brown', defect_date: '2024-05-04', defect_ref_id: 'DEF-004', defect_status: 'Resolved', defect_time: '13:00:00', previous_status: 'In Progress', record_status: 'Active', release_id: 2, defect_id: 4 },
      { assigned_by: 'Edward Brown', assigned_to: 'Fiona Davis', defect_date: '2024-05-05', defect_ref_id: 'DEF-005', defect_status: 'Closed', defect_time: '14:00:00', previous_status: 'Resolved', record_status: 'Active', release_id: 3, defect_id: 5 },
      { assigned_by: 'Fiona Davis', assigned_to: 'George Miller', defect_date: '2024-05-06', defect_ref_id: 'DEF-006', defect_status: 'Rejected', defect_time: '15:00:00', previous_status: 'Open', record_status: 'Active', release_id: 3, defect_id: 6 },
      { assigned_by: 'George Miller', assigned_to: 'Alice Doe', defect_date: '2024-05-07', defect_ref_id: 'DEF-007', defect_status: 'Reopened', defect_time: '16:00:00', previous_status: 'Closed', record_status: 'Active', release_id: 4, defect_id: 7 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('defect_history', {
      defect_ref_id: ['DEF-001', 'DEF-002', 'DEF-003', 'DEF-004', 'DEF-005', 'DEF-006', 'DEF-007']
    });
  }
};