const express = require('express');
const router = express.Router();
const defectSeverityController = require('../controllers/defectSeverityController');

router.get('/defect-severity-index/:projectId', defectSeverityController.getDefectSeverityIndex);

module.exports = router;
