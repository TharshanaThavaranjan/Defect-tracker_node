const defectRepository = require('../repositories/defectRepository');

class DefectService {
    // Get all defects
    async getAllDefects() {
        try {
            const defects = await defectRepository.findAll();
            return {
                success: true,
                data: defects,
                message: 'Defects retrieved successfully',
                count: defects.length
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve defects'
            };
        }
    }

    // Get defect by ID
    async getDefectById(id) {
        try {
            // Validate ID
            if (!id || isNaN(id)) {
                throw new Error('Invalid defect ID');
            }

            const defect = await defectRepository.findById(id);
            return {
                success: true,
                data: defect,
                message: 'Defect retrieved successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve defect'
            };
        }
    }

    // Create new defect
    async createDefect(defectData) {
        try {
            // Validate required fields
            this.validateDefectData(defectData);

            // Check for duplicate defect_id
            if (defectData.defect_id) {
                const exists = await defectRepository.existsByDefectId(defectData.defect_id);
                if (exists) {
                    throw new Error('Defect ID already exists');
                }
            }

            // Validate foreign key references
            this.validateForeignKeys(defectData);

            // Initialize re_open_count if not provided
            if (defectData.re_open_count === undefined) {
                defectData.re_open_count = 0;
            }

            const defect = await defectRepository.create(defectData);

            return {
                success: true,
                data: defect,
                message: 'Defect created successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to create defect'
            };
        }
    }

    // Update defect
    async updateDefect(id, defectData) {
        try {
            // Validate ID
            if (!id || isNaN(id)) {
                throw new Error('Invalid defect ID');
            }

            // Validate foreign key references
            this.validateForeignKeys(defectData);

            // Check for duplicate defect_id (excluding current defect)
            if (defectData.defect_id) {
                const currentDefect = await defectRepository.findById(id);
                if (currentDefect.defect_id !== defectData.defect_id) {
                    const exists = await defectRepository.existsByDefectId(defectData.defect_id);
                    if (exists) {
                        throw new Error('Defect ID already exists');
                    }
                }
            }

            const defect = await defectRepository.update(id, defectData);

            return {
                success: true,
                data: defect,
                message: 'Defect updated successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to update defect'
            };
        }
    }

    // Delete defect
    async deleteDefect(id) {
        try {
            // Validate ID
            if (!id || isNaN(id)) {
                throw new Error('Invalid defect ID');
            }

            const result = await defectRepository.delete(id);
            return {
                success: true,
                data: result,
                message: 'Defect deleted successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to delete defect'
            };
        }
    }

    // Search defects by defect_id
    async searchDefects(searchTerm) {
        try {
            if (!searchTerm || searchTerm.trim() === '') {
                throw new Error('Search term is required');
            }

            const defects = await defectRepository.findByDefectId(searchTerm.trim());
            return {
                success: true,
                data: defects,
                message: 'Search completed successfully',
                count: defects.length,
                searchTerm: searchTerm.trim()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Search failed'
            };
        }
    }

    // Get defects by status
    async getDefectsByStatus(statusId) {
        try {
            if (!statusId || isNaN(statusId)) {
                throw new Error('Invalid status ID');
            }

            const defects = await defectRepository.findByStatus(statusId);
            return {
                success: true,
                data: defects,
                message: 'Defects by status retrieved successfully',
                count: defects.length
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve defects by status'
            };
        }
    }

    // Get defects by priority
    async getDefectsByPriority(priorityId) {
        try {
            if (!priorityId || isNaN(priorityId)) {
                throw new Error('Invalid priority ID');
            }

            const defects = await defectRepository.findByPriority(priorityId);
            return {
                success: true,
                data: defects,
                message: 'Defects by priority retrieved successfully',
                count: defects.length
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve defects by priority'
            };
        }
    }

    // Get defects by severity
    async getDefectsBySeverity(severityId) {
        try {
            if (!severityId || isNaN(severityId)) {
                throw new Error('Invalid severity ID');
            }

            const defects = await defectRepository.findBySeverity(severityId);
            return {
                success: true,
                data: defects,
                message: 'Defects by severity retrieved successfully',
                count: defects.length
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve defects by severity'
            };
        }
    }

    // Get defects by project
    async getDefectsByProject(projectId) {
        try {
            if (!projectId || isNaN(projectId)) {
                throw new Error('Invalid project ID');
            }

            const defects = await defectRepository.findByProject(projectId);
            return {
                success: true,
                data: defects,
                message: 'Defects by project retrieved successfully',
                count: defects.length
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve defects by project'
            };
        }
    }

    // Get defects by assigned user
    async getDefectsByAssignedTo(userId) {
        try {
            if (!userId || isNaN(userId)) {
                throw new Error('Invalid user ID');
            }

            const defects = await defectRepository.findByAssignedTo(userId);
            return {
                success: true,
                data: defects,
                message: 'Defects by assigned user retrieved successfully',
                count: defects.length
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve defects by assigned user'
            };
        }
    }

    // Get defects by module
    async getDefectsByModule(moduleId) {
        try {
            if (!moduleId || isNaN(moduleId)) {
                throw new Error('Invalid module ID');
            }

            const defects = await defectRepository.findByModule(moduleId);
            return {
                success: true,
                data: defects,
                message: 'Defects by module retrieved successfully',
                count: defects.length
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve defects by module'
            };
        }
    }

    // Get defect statistics
    async getDefectStats() {
        try {
            const totalCount = await defectRepository.count();
            const highReopenDefects = await defectRepository.findByReopenCount(3);
            
            return {
                success: true,
                data: {
                    totalCount,
                    highReopenCount: highReopenDefects.length,
                    highReopenDefects: highReopenDefects.slice(0, 5) // Top 5
                },
                message: 'Defect statistics retrieved successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve defect statistics'
            };
        }
    }

    // Validate defect data
    validateDefectData(defectData) {
        if (!defectData.defect_id || defectData.defect_id.trim() === '') {
            throw new Error('Defect ID is required');
        }

        if (!defectData.description || defectData.description.trim() === '') {
            throw new Error('Description is required');
        }

        if (defectData.re_open_count !== undefined && (isNaN(defectData.re_open_count) || defectData.re_open_count < 0)) {
            throw new Error('Re-open count must be a non-negative number');
        }

        if (defectData.steps && defectData.steps.length > 1000) {
            throw new Error('Steps cannot exceed 1000 characters');
        }

        if (defectData.description && defectData.description.length > 255) {
            throw new Error('Description cannot exceed 255 characters');
        }

        if (defectData.attachment && defectData.attachment.length > 255) {
            throw new Error('Attachment path cannot exceed 255 characters');
        }
    }

    // Validate foreign key references
    validateForeignKeys(defectData) {
        const foreignKeys = [
            'assigned_by', 'assigned_to', 'defect_status_id', 'type_id',
            'modules_id', 'priority_id', 'project_id', 'release_test_case_id',
            'severity_id', 'sub_module_id'
        ];

        foreignKeys.forEach(key => {
            if (defectData[key] !== undefined && (isNaN(defectData[key]) || defectData[key] <= 0)) {
                throw new Error(`${key} must be a valid positive number`);
            }
        });
    }
}

module.exports = new DefectService();
