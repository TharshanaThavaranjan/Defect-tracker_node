// app.js
const express = require('express');
const app = express();
const sequelize = require('./db');

// Import all models
require('./models/designation');
require('./models/user');
require('./models/role');
require('./models/priority');
require('./models/defect_type');
require('./models/severity');
require('./models/defect_status');
require('./models/release_type');
require('./models/privilege');
require('./models/project');
require('./models/smtp_config');
require('./models/modules');
require('./models/email_user');
require('./models/bench');
require('./models/user_privilege');
require('./models/group_privilege');
require('./models/project_user_privilege');
require('./models/project_allocation');
require('./models/sub_module');
require('./models/project_allocation_history');
require('./models/releases');
require('./models/release_testcase');
require('./models/defect');
require('./models/defect_history');
require('./models/comments');
require('./models/association');

// Import routes
const designationRoutes = require('./routes/designationRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Mount API routes
app.use('/api/designations', designationRoutes);

// Default route shows DB connection status
app.get('/', async (req, res) => {
  try {
    await sequelize.authenticate(); // Check DB connection
    await sequelize.sync();         // Sync models
    res.send('Database connected successfully'); // Browser message
  } catch (error) {
    res.status(500).send('Database connection failed: ' + error.message);
  }
});

// Connect to DB and start server
const PORT = 3000;
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
    return sequelize.sync(); // Sync all models
  })
  .then(() => {
    console.log('All models synced.');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('DB connection or sync error:', err);
  });
