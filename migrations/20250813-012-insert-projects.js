'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('project', [
      { project_id: 'PRJ-001', project_name: 'E-Commerce Platform', client_name: 'Acme Corp', country: 'USA', email: 'contact@acme.com', description: 'Online shopping platform', project_status: 'ACTIVE', start_date: '2024-01-01', end_date: '2024-12-31', kloc: 50.5, phone_no: '+1-555-0001', state: 'California', user_id: 1 },
      { project_id: 'PRJ-002', project_name: 'CRM System', client_name: 'TechCorp', country: 'Canada', email: 'info@techcorp.ca', description: 'Customer relationship management', project_status: 'ACTIVE', start_date: '2024-02-01', end_date: '2024-11-30', kloc: 35.2, phone_no: '+1-555-0002', state: 'Ontario', user_id: 2 },
      { project_id: 'PRJ-003', project_name: 'Mobile Banking App', client_name: 'FinanceBank', country: 'UK', email: 'dev@financebank.co.uk', description: 'Mobile banking application', project_status: 'ACTIVE', start_date: '2024-03-01', end_date: '2025-02-28', kloc: 42.8, phone_no: '+44-555-0003', state: 'London', user_id: 3 },
      { project_id: 'PRJ-004', project_name: 'Inventory Management', client_name: 'RetailChain', country: 'Australia', email: 'tech@retailchain.au', description: 'Warehouse inventory system', project_status: 'COMPLETED', start_date: '2023-06-01', end_date: '2024-05-31', kloc: 28.7, phone_no: '+61-555-0004', state: 'Sydney', user_id: 4 },
      { project_id: 'PRJ-005', project_name: 'Learning Management System', client_name: 'EduTech', country: 'Germany', email: 'contact@edutech.de', description: 'Online learning platform', project_status: 'ACTIVE', start_date: '2024-04-01', end_date: '2025-03-31', kloc: 38.9, phone_no: '+49-555-0005', state: 'Berlin', user_id: 5 },
      { project_id: 'PRJ-006', project_name: 'Healthcare Portal', client_name: 'MedCenter', country: 'France', email: 'it@medcenter.fr', description: 'Patient management portal', project_status: 'ON_HOLD', start_date: '2024-05-01', end_date: '2025-04-30', kloc: 45.3, phone_no: '+33-555-0006', state: 'Paris', user_id: 6 },
      { project_id: 'PRJ-007', project_name: 'Social Media Analytics', client_name: 'DataInsights', country: 'Japan', email: 'dev@datainsights.jp', description: 'Social media data analysis tool', project_status: 'ACTIVE', start_date: '2024-06-01', end_date: '2025-05-31', kloc: 52.1, phone_no: '+81-555-0007', state: 'Tokyo', user_id: 7 }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('project', {
      project_id: ['PRJ-001', 'PRJ-002', 'PRJ-003', 'PRJ-004', 'PRJ-005', 'PRJ-006', 'PRJ-007']
    });
  }
};