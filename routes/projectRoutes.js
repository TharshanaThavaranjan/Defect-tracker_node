const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// GET /api/projects/stats - Get project statistics (must be before /:id route)
router.get('/stats', projectController.getProjectStats);

// GET /api/projects/search/:term - Search projects (must be before /:id route)
router.get('/search/:term', projectController.searchProjects);

// GET /api/projects/status/:status - Get projects by status (must be before /:id route)
router.get('/status/:status', projectController.getProjectsByStatus);

// GET /api/projects/client/:clientName - Get projects by client (must be before /:id route)
router.get('/client/:clientName', projectController.getProjectsByClient);

// GET /api/projects/user/:userId - Get projects by user (must be before /:id route)
router.get('/user/:userId', projectController.getProjectsByUser);

// GET /api/projects - Get all projects
router.get('/', projectController.getAllProjects);

// GET /api/projects/:id - Get project by ID
router.get('/:id', projectController.getProjectById);

// POST /api/projects - Create new project
router.post('/', projectController.createProject);

// PUT /api/projects/:id - Update project
router.put('/:id', projectController.updateProject);

// DELETE /api/projects/:id - Delete project
router.delete('/:id', projectController.deleteProject);

module.exports = router;
