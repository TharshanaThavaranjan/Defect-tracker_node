const express = require('express');
const router = express.Router();
const designationController = require('../controllers/designationController');

// GET /api/designations/stats - Get designation statistics (must be before /:id route)
router.get('/stats', designationController.getDesignationStats);

// GET /api/designations - Get all designations
router.get('/', designationController.getAllDesignations);

// GET /api/designations/search/:term - Search designations
router.get('/search/:term', designationController.searchDesignations);

// GET /api/designations/:id - Get designation by ID
router.get('/:id', designationController.getDesignationById);

// POST /api/designations - Create new designation
router.post('/', designationController.createDesignation);

// PUT /api/designations/:id - Update designation
router.put('/:id', designationController.updateDesignation);

// DELETE /api/designations/:id - Delete designation
router.delete('/:id', designationController.deleteDesignation);

module.exports = router;
