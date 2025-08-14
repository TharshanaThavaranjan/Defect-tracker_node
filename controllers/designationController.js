const designationService = require('../services/designationService');

class DesignationController {
    // GET /api/designations - Get all designations
    async getAllDesignations(req, res) {
        try {
            const result = await designationService.getAllDesignations();
            
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

    // GET /api/designations/:id - Get designation by ID
    async getDesignationById(req, res) {
        try {
            const { id } = req.params;
            const result = await designationService.getDesignationById(id);
            
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

    // POST /api/designations - Create new designation
    async createDesignation(req, res) {
        try {
            const result = await designationService.createDesignation(req.body);
            
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

    // PUT /api/designations/:id - Update designation
    async updateDesignation(req, res) {
        try {
            const { id } = req.params;
            const result = await designationService.updateDesignation(id, req.body);
            
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

    // DELETE /api/designations/:id - Delete designation
    async deleteDesignation(req, res) {
        try {
            const { id } = req.params;
            const result = await designationService.deleteDesignation(id);
            
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

    // GET /api/designations/search/:term - Search designations
    async searchDesignations(req, res) {
        try {
            const { term } = req.params;
            const result = await designationService.searchDesignations(term);
            
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

    // GET /api/designations/stats - Get designation statistics
    async getDesignationStats(req, res) {
        try {
            const result = await designationService.getDesignationStats();
            
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

module.exports = new DesignationController();
