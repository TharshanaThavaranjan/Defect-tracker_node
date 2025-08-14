const projectService = require('../services/projectService');

class ProjectController {
    // GET /api/projects - Get all projects
    async getAllProjects(req, res) {
        try {
            const result = await projectService.getAllProjects();
            
            if (result.success) {
                return res.status(200).json({
                    success: true,
                    data: result.data,
                    message: result.message,
                    count: result.count
                });
            } else {
                return res.status(500).json({
                    success: false,
                    error: result.error,
                    message: result.message
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message,
                message: 'Internal server error'
            });
        }
    }

    // GET /api/projects/:id - Get project by ID
    async getProjectById(req, res) {
        try {
            const { id } = req.params;
            const result = await projectService.getProjectById(id);
            
            if (result.success) {
                return res.status(200).json({
                    success: true,
                    data: result.data,
                    message: result.message
                });
            } else {
                const statusCode = result.error.includes('not found') ? 404 : 400;
                return res.status(statusCode).json({
                    success: false,
                    error: result.error,
                    message: result.message
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message,
                message: 'Internal server error'
            });
        }
    }

    // POST /api/projects - Create new project
    async createProject(req, res) {
        try {
            const result = await projectService.createProject(req.body);
            
            if (result.success) {
                return res.status(201).json({
                    success: true,
                    data: result.data,
                    message: result.message
                });
            } else {
                const statusCode = result.error.includes('already exists') ? 409 : 400;
                return res.status(statusCode).json({
                    success: false,
                    error: result.error,
                    message: result.message
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message,
                message: 'Internal server error'
            });
        }
    }

    // PUT /api/projects/:id - Update project
    async updateProject(req, res) {
        try {
            const { id } = req.params;
            const result = await projectService.updateProject(id, req.body);
            
            if (result.success) {
                return res.status(200).json({
                    success: true,
                    data: result.data,
                    message: result.message
                });
            } else {
                let statusCode = 400;
                if (result.error.includes('not found')) {
                    statusCode = 404;
                } else if (result.error.includes('already exists')) {
                    statusCode = 409;
                }
                
                return res.status(statusCode).json({
                    success: false,
                    error: result.error,
                    message: result.message
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message,
                message: 'Internal server error'
            });
        }
    }

    // DELETE /api/projects/:id - Delete project
    async deleteProject(req, res) {
        try {
            const { id } = req.params;
            const result = await projectService.deleteProject(id);
            
            if (result.success) {
                return res.status(200).json({
                    success: true,
                    data: result.data,
                    message: result.message
                });
            } else {
                const statusCode = result.error.includes('not found') ? 404 : 400;
                return res.status(statusCode).json({
                    success: false,
                    error: result.error,
                    message: result.message
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message,
                message: 'Internal server error'
            });
        }
    }

    // GET /api/projects/search/:term - Search projects
    async searchProjects(req, res) {
        try {
            const { term } = req.params;
            const result = await projectService.searchProjects(term);
            
            if (result.success) {
                return res.status(200).json({
                    success: true,
                    data: result.data,
                    message: result.message,
                    count: result.count,
                    searchTerm: result.searchTerm
                });
            } else {
                return res.status(400).json({
                    success: false,
                    error: result.error,
                    message: result.message
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message,
                message: 'Internal server error'
            });
        }
    }

    // GET /api/projects/status/:status - Get projects by status
    async getProjectsByStatus(req, res) {
        try {
            const { status } = req.params;
            const result = await projectService.getProjectsByStatus(status.toUpperCase());
            
            if (result.success) {
                return res.status(200).json({
                    success: true,
                    data: result.data,
                    message: result.message,
                    count: result.count
                });
            } else {
                return res.status(400).json({
                    success: false,
                    error: result.error,
                    message: result.message
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message,
                message: 'Internal server error'
            });
        }
    }

    // GET /api/projects/client/:clientName - Get projects by client
    async getProjectsByClient(req, res) {
        try {
            const { clientName } = req.params;
            const result = await projectService.getProjectsByClient(clientName);
            
            if (result.success) {
                return res.status(200).json({
                    success: true,
                    data: result.data,
                    message: result.message,
                    count: result.count,
                    clientName: result.clientName
                });
            } else {
                return res.status(400).json({
                    success: false,
                    error: result.error,
                    message: result.message
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message,
                message: 'Internal server error'
            });
        }
    }

    // GET /api/projects/user/:userId - Get projects by user
    async getProjectsByUser(req, res) {
        try {
            const { userId } = req.params;
            const result = await projectService.getProjectsByUser(userId);
            
            if (result.success) {
                return res.status(200).json({
                    success: true,
                    data: result.data,
                    message: result.message,
                    count: result.count
                });
            } else {
                return res.status(400).json({
                    success: false,
                    error: result.error,
                    message: result.message
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message,
                message: 'Internal server error'
            });
        }
    }

    // GET /api/projects/stats - Get project statistics
    async getProjectStats(req, res) {
        try {
            const result = await projectService.getProjectStats();
            
            if (result.success) {
                return res.status(200).json({
                    success: true,
                    data: result.data,
                    message: result.message
                });
            } else {
                return res.status(500).json({
                    success: false,
                    error: result.error,
                    message: result.message
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message,
                message: 'Internal server error'
            });
        }
    }
}

module.exports = new ProjectController();
