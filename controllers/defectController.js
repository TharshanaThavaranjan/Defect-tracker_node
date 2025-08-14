const defectService = require('../services/defectService');

class DefectController {
    // GET /api/defects - Get all defects
    async getAllDefects(req, res) {
        try {
            const result = await defectService.getAllDefects();
            
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

    // GET /api/defects/:id - Get defect by ID
    async getDefectById(req, res) {
        try {
            const { id } = req.params;
            const result = await defectService.getDefectById(id);
            
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

    // POST /api/defects - Create new defect
    async createDefect(req, res) {
        try {
            const result = await defectService.createDefect(req.body);
            
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

    // PUT /api/defects/:id - Update defect
    async updateDefect(req, res) {
        try {
            const { id } = req.params;
            const result = await defectService.updateDefect(id, req.body);
            
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

    // DELETE /api/defects/:id - Delete defect
    async deleteDefect(req, res) {
        try {
            const { id } = req.params;
            const result = await defectService.deleteDefect(id);
            
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

    // GET /api/defects/search/:term - Search defects
    async searchDefects(req, res) {
        try {
            const { term } = req.params;
            const result = await defectService.searchDefects(term);
            
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

    // GET /api/defects/status/:statusId - Get defects by status
    async getDefectsByStatus(req, res) {
        try {
            const { statusId } = req.params;
            const result = await defectService.getDefectsByStatus(statusId);
            
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

    // GET /api/defects/priority/:priorityId - Get defects by priority
    async getDefectsByPriority(req, res) {
        try {
            const { priorityId } = req.params;
            const result = await defectService.getDefectsByPriority(priorityId);
            
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

    // GET /api/defects/severity/:severityId - Get defects by severity
    async getDefectsBySeverity(req, res) {
        try {
            const { severityId } = req.params;
            const result = await defectService.getDefectsBySeverity(severityId);
            
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

    // GET /api/defects/project/:projectId - Get defects by project
    async getDefectsByProject(req, res) {
        try {
            const { projectId } = req.params;
            const result = await defectService.getDefectsByProject(projectId);
            
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

    // GET /api/defects/assigned/:userId - Get defects by assigned user
    async getDefectsByAssignedTo(req, res) {
        try {
            const { userId } = req.params;
            const result = await defectService.getDefectsByAssignedTo(userId);
            
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

    // GET /api/defects/module/:moduleId - Get defects by module
    async getDefectsByModule(req, res) {
        try {
            const { moduleId } = req.params;
            const result = await defectService.getDefectsByModule(moduleId);
            
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

    // GET /api/defects/stats - Get defect statistics
    async getDefectStats(req, res) {
        try {
            const result = await defectService.getDefectStats();
            
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

module.exports = new DefectController();
