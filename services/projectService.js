const projectRepository = require('../repositories/projectRepository');

class ProjectService {
    // Get all projects
    async getAllProjects() {
        try {
            const projects = await projectRepository.findAll();
            return {
                success: true,
                data: projects,
                message: 'Projects retrieved successfully',
                count: projects.length
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve projects'
            };
        }
    }

    // Get project by ID
    async getProjectById(id) {
        try {
            // Validate ID
            if (!id || isNaN(id)) {
                throw new Error('Invalid project ID');
            }

            const project = await projectRepository.findById(id);
            return {
                success: true,
                data: project,
                message: 'Project retrieved successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve project'
            };
        }
    }

    // Create new project
    async createProject(projectData) {
        try {
            // Validate required fields
            this.validateProjectData(projectData);

            // Check for duplicate project_id
            if (projectData.project_id) {
                const exists = await projectRepository.existsByProjectId(projectData.project_id);
                if (exists) {
                    throw new Error('Project ID already exists');
                }
            }

            // Validate project status
            if (projectData.project_status && !this.isValidStatus(projectData.project_status)) {
                throw new Error('Invalid project status. Must be ACTIVE, COMPLETED, INACTIVE, or ON_HOLD');
            }

            // Validate dates
            if (projectData.start_date && projectData.end_date) {
                if (new Date(projectData.start_date) > new Date(projectData.end_date)) {
                    throw new Error('Start date cannot be after end date');
                }
            }

            const project = await projectRepository.create(projectData);

            return {
                success: true,
                data: project,
                message: 'Project created successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to create project'
            };
        }
    }

    // Update project
    async updateProject(id, projectData) {
        try {
            // Validate ID
            if (!id || isNaN(id)) {
                throw new Error('Invalid project ID');
            }

            // Validate project status
            if (projectData.project_status && !this.isValidStatus(projectData.project_status)) {
                throw new Error('Invalid project status. Must be ACTIVE, COMPLETED, INACTIVE, or ON_HOLD');
            }

            // Validate dates
            if (projectData.start_date && projectData.end_date) {
                if (new Date(projectData.start_date) > new Date(projectData.end_date)) {
                    throw new Error('Start date cannot be after end date');
                }
            }

            // Check for duplicate project_id (excluding current project)
            if (projectData.project_id) {
                const currentProject = await projectRepository.findById(id);
                if (currentProject.project_id !== projectData.project_id) {
                    const exists = await projectRepository.existsByProjectId(projectData.project_id);
                    if (exists) {
                        throw new Error('Project ID already exists');
                    }
                }
            }

            const project = await projectRepository.update(id, projectData);

            return {
                success: true,
                data: project,
                message: 'Project updated successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to update project'
            };
        }
    }

    // Delete project
    async deleteProject(id) {
        try {
            // Validate ID
            if (!id || isNaN(id)) {
                throw new Error('Invalid project ID');
            }

            const result = await projectRepository.delete(id);
            return {
                success: true,
                data: result,
                message: 'Project deleted successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to delete project'
            };
        }
    }

    // Search projects by name
    async searchProjects(searchTerm) {
        try {
            if (!searchTerm || searchTerm.trim() === '') {
                throw new Error('Search term is required');
            }

            const projects = await projectRepository.findByName(searchTerm.trim());
            return {
                success: true,
                data: projects,
                message: 'Search completed successfully',
                count: projects.length,
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

    // Get projects by status
    async getProjectsByStatus(status) {
        try {
            if (!this.isValidStatus(status)) {
                throw new Error('Invalid project status. Must be ACTIVE, COMPLETED, INACTIVE, or ON_HOLD');
            }

            const projects = await projectRepository.findByStatus(status);
            return {
                success: true,
                data: projects,
                message: `Projects with status ${status} retrieved successfully`,
                count: projects.length
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve projects by status'
            };
        }
    }

    // Get projects by client
    async getProjectsByClient(clientName) {
        try {
            if (!clientName || clientName.trim() === '') {
                throw new Error('Client name is required');
            }

            const projects = await projectRepository.findByClient(clientName.trim());
            return {
                success: true,
                data: projects,
                message: 'Projects by client retrieved successfully',
                count: projects.length,
                clientName: clientName.trim()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve projects by client'
            };
        }
    }

    // Get projects by user
    async getProjectsByUser(userId) {
        try {
            if (!userId || isNaN(userId)) {
                throw new Error('Invalid user ID');
            }

            const projects = await projectRepository.findByUser(userId);
            return {
                success: true,
                data: projects,
                message: 'Projects by user retrieved successfully',
                count: projects.length
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve projects by user'
            };
        }
    }

    // Get project statistics
    async getProjectStats() {
        try {
            const totalCount = await projectRepository.count();
            const activeProjects = await projectRepository.findByStatus('ACTIVE');
            const completedProjects = await projectRepository.findByStatus('COMPLETED');
            const inactiveProjects = await projectRepository.findByStatus('INACTIVE');
            const onHoldProjects = await projectRepository.findByStatus('ON_HOLD');
            
            return {
                success: true,
                data: {
                    totalCount,
                    statusBreakdown: {
                        active: activeProjects.length,
                        completed: completedProjects.length,
                        inactive: inactiveProjects.length,
                        onHold: onHoldProjects.length
                    }
                },
                message: 'Project statistics retrieved successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve project statistics'
            };
        }
    }

    // Validate project data
    validateProjectData(projectData) {
        if (!projectData.project_name || projectData.project_name.trim() === '') {
            throw new Error('Project name is required');
        }

        if (!projectData.client_name || projectData.client_name.trim() === '') {
            throw new Error('Client name is required');
        }

        if (projectData.email && !this.isValidEmail(projectData.email)) {
            throw new Error('Invalid email format');
        }

        if (projectData.kloc && (isNaN(projectData.kloc) || projectData.kloc < 0)) {
            throw new Error('KLOC must be a positive number');
        }
    }

    // Validate project status
    isValidStatus(status) {
        const validStatuses = ['ACTIVE', 'COMPLETED', 'INACTIVE', 'ON_HOLD'];
        return validStatuses.includes(status);
    }

    // Validate email format
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

module.exports = new ProjectService();
