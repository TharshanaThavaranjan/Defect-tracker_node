const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// ...existing routes...

router.get('/defect-density/:projectId', dashboardController.getDefectDensity);
router.get('/defect-severity-index/:projectId', dashboardController.getDefectSeverityIndex);

module.exports = router;