const express = require('express');
const router = express.Router();
const defectController = require('../controllers/defectController');

// GET /api/defects/stats - Get defect statistics (must be before /:id route)
router.get('/stats', defectController.getDefectStats);

// GET /api/defects/search/:term - Search defects (must be before /:id route)
router.get('/search/:term', defectController.searchDefects);

// GET /api/defects/status/:statusId - Get defects by status (must be before /:id route)
router.get('/status/:statusId', defectController.getDefectsByStatus);

// GET /api/defects/priority/:priorityId - Get defects by priority (must be before /:id route)
router.get('/priority/:priorityId', defectController.getDefectsByPriority);

// GET /api/defects/severity/:severityId - Get defects by severity (must be before /:id route)
router.get('/severity/:severityId', defectController.getDefectsBySeverity);

// GET /api/defects/project/:projectId - Get defects by project (must be before /:id route)
router.get('/project/:projectId', defectController.getDefectsByProject);

// GET /api/defects/assigned/:userId - Get defects by assigned user (must be before /:id route)
router.get('/assigned/:userId', defectController.getDefectsByAssignedTo);

// GET /api/defects/module/:moduleId - Get defects by module (must be before /:id route)
router.get('/module/:moduleId', defectController.getDefectsByModule);

// GET /api/defects - Get all defects
router.get('/', defectController.getAllDefects);

// GET /api/defects/:id - Get defect by ID
router.get('/:id', defectController.getDefectById);

// POST /api/defects - Create new defect
router.post('/', defectController.createDefect);

// PUT /api/defects/:id - Update defect
router.put('/:id', defectController.updateDefect);

// DELETE /api/defects/:id - Delete defect
router.delete('/:id', defectController.deleteDefect);

module.exports = router;
