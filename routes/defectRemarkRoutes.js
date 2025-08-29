const express = require('express');
const router = express.Router();
const defectRemarkController = require('../controllers/defectRemarkController');

router.get('/defect-remark-ratio/:projectId', defectRemarkController.getDefectRemarkRatio);

module.exports = router;
