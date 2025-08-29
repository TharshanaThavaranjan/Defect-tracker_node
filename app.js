// app.js
const express = require('express');
const app = express();
const sequelize = require('./db');
const dashboardRepository = require('./dashboard/dashboardRepository');

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
const projectRoutes = require('./routes/projectRoutes');
const defectRoutes = require('./routes/defectRoutes');
const defectSeverityRoutes = require('./routes/defectSeverityRoutes');
const defectRemarkRoutes = require('./routes/defectRemarkRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Mount API routes
app.use('/api/designations', designationRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/defects', defectRoutes);
app.use('/api', defectSeverityRoutes);
app.use('/api', defectRemarkRoutes);

app.get('/api/dashboard/defect-density/:projectId', async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const kloc = await dashboardRepository.getProjectKLOC(projectId);
    const totalDefects = await dashboardRepository.getTotalDefects(projectId);
    const duplicateDefects = await dashboardRepository.getDefectCountByStatus(projectId, 'Duplicate');
    const rejectedDefects = await dashboardRepository.getDefectCountByStatus(projectId, 'Rejected');
    const validDefects = totalDefects - (duplicateDefects + rejectedDefects);
    const defectDensity = kloc > 0 ? validDefects / kloc : 0;

    let color = 'green';
    if (defectDensity > 10) color = 'red';
    else if (defectDensity > 7) color = 'yellow';

    res.json({
      success: true,
      defectDensity,
      color,
      validDefects,
      kloc,
      totalDefects,
      duplicateDefects,
      rejectedDefects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

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
      console.log(`Server running on http://192.168.1.120:${PORT}`);
    });
  })
  .catch(err => {
    console.error('DB connection or sync error:', err);
  });
