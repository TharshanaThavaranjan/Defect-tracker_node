const express = require('express');
const router = express.Router();

// Import routes
const designationRoutes = require('./designationRoutes');
const projectRoutes = require('./projectRoutes');

// Mount routes
router.use('/designations', designationRoutes);
router.use('/projects', projectRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'API is running successfully',
        timestamp: new Date().toISOString(),
        endpoints: {
            designations: '/api/designations',
            projects: '/api/projects'
        }
    });
});

// API documentation endpoint
router.get('/docs', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'API Documentation',
        version: '1.0.0',
        description: 'Complete CRUD API for designation and project tables',
        baseUrl: '/api',
        endpoints: {
            'GET /designations': 'Get all designations',
            'GET /designations/:id': 'Get designation by ID',
            'POST /designations': 'Create new designation',
            'PUT /designations/:id': 'Update designation',
            'DELETE /designations/:id': 'Delete designation',
            'GET /designations/search/:term': 'Search designations',
            'GET /designations/stats': 'Get designation statistics'
        },
        exampleRequests: {
            getAllDesignations: 'GET /api/designations',
            getDesignationById: 'GET /api/designations/1',
            createDesignation: 'POST /api/designations with body: {"designation": "Senior Developer"}',
            updateDesignation: 'PUT /api/designations/1 with body: {"designation": "Lead Developer"}',
            deleteDesignation: 'DELETE /api/designations/1',
            searchDesignations: 'GET /api/designations/search/engineer',
            getStats: 'GET /api/designations/stats'
        }
    });
});

module.exports = router;
