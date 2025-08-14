'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('smtp_config', [
      { name: 'Gmail SMTP', smtpHost: 'smtp.gmail.com', smtpPort: 587, userName: 'admin@company.com', password: 'password123', fromEmail: 'noreply@company.com', fromName: 'Company System' },
      { name: 'Outlook SMTP', smtpHost: 'smtp.office365.com', smtpPort: 587, userName: 'admin@company.com', password: 'password123', fromEmail: 'alerts@company.com', fromName: 'Alert System' },
      { name: 'Yahoo SMTP', smtpHost: 'smtp.mail.yahoo.com', smtpPort: 587, userName: 'admin@company.com', password: 'password123', fromEmail: 'support@company.com', fromName: 'Support Team' },
      { name: 'SendGrid SMTP', smtpHost: 'smtp.sendgrid.net', smtpPort: 587, userName: 'apikey', password: 'SG.api_key_here', fromEmail: 'notifications@company.com', fromName: 'Notification Service' },
      { name: 'Mailgun SMTP', smtpHost: 'smtp.mailgun.org', smtpPort: 587, userName: 'postmaster@mg.company.com', password: 'mailgun_password', fromEmail: 'info@company.com', fromName: 'Information Desk' },
      { name: 'AWS SES SMTP', smtpHost: 'email-smtp.us-east-1.amazonaws.com', smtpPort: 587, userName: 'AKIAIOSFODNN7EXAMPLE', password: 'aws_ses_password', fromEmail: 'system@company.com', fromName: 'System Administrator' },
      { name: 'Local SMTP', smtpHost: 'localhost', smtpPort: 25, userName: 'local_user', password: 'local_password', fromEmail: 'local@company.com', fromName: 'Local Server' }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('smtp_config', {
      name: ['Gmail SMTP', 'Outlook SMTP', 'Yahoo SMTP', 'SendGrid SMTP', 'Mailgun SMTP', 'AWS SES SMTP', 'Local SMTP']
    });
  }
};