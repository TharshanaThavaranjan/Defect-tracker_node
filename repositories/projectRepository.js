const Project = require('../models/project');

class ProjectRepository {
    // Get all projects
    async findAll() {
        try {
            return await Project.findAll({
                order: [['id', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching projects: ${error.message}`);
        }
    }

    // Get project by ID
    async findById(id) {
        try {
            const project = await Project.findByPk(id);
            if (!project) {
                throw new Error('Project not found');
            }
            return project;
        } catch (error) {
            throw new Error(`Error fetching project: ${error.message}`);
        }
    }

    // Create new project
    async create(projectData) {
        try {
            return await Project.create(projectData);
        } catch (error) {
            throw new Error(`Error creating project: ${error.message}`);
        }
    }

    // Update project
    async update(id, projectData) {
        try {
            const project = await this.findById(id);
            return await project.update(projectData);
        } catch (error) {
            throw new Error(`Error updating project: ${error.message}`);
        }
    }

    // Delete project
    async delete(id) {
        try {
            const project = await this.findById(id);
            await project.destroy();
            return { message: 'Project deleted successfully' };
        } catch (error) {
            throw new Error(`Error deleting project: ${error.message}`);
        }
    }

    // Search projects by name
    async findByName(name) {
        try {
            return await Project.findAll({
                where: {
                    project_name: {
                        [require('sequelize').Op.like]: `%${name}%`
                    }
                },
                order: [['project_name', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error searching projects: ${error.message}`);
        }
    }

    // Find projects by status
    async findByStatus(status) {
        try {
            return await Project.findAll({
                where: {
                    project_status: status
                },
                order: [['project_name', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching projects by status: ${error.message}`);
        }
    }

    // Find projects by client
    async findByClient(clientName) {
        try {
            return await Project.findAll({
                where: {
                    client_name: {
                        [require('sequelize').Op.like]: `%${clientName}%`
                    }
                },
                order: [['client_name', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error searching projects by client: ${error.message}`);
        }
    }

    // Find projects by user
    async findByUser(userId) {
        try {
            return await Project.findAll({
                where: {
                    user_id: userId
                },
                order: [['project_name', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching projects by user: ${error.message}`);
        }
    }

    // Get project count
    async count() {
        try {
            return await Project.count();
        } catch (error) {
            throw new Error(`Error counting projects: ${error.message}`);
        }
    }

    // Check if project exists by project_id
    async existsByProjectId(projectId) {
        try {
            const project = await Project.findOne({
                where: {
                    project_id: projectId
                }
            });
            return !!project;
        } catch (error) {
            throw new Error(`Error checking project existence: ${error.message}`);
        }
    }

    // Get projects by date range
    async findByDateRange(startDate, endDate) {
        try {
            return await Project.findAll({
                where: {
                    start_date: {
                        [require('sequelize').Op.between]: [startDate, endDate]
                    }
                },
                order: [['start_date', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching projects by date range: ${error.message}`);
        }
    }
}

module.exports = new ProjectRepository();
