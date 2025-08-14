const Defect = require('../models/defect');

class DefectRepository {
    // Get all defects
    async findAll() {
        try {
            return await Defect.findAll({
                order: [['id', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching defects: ${error.message}`);
        }
    }

    // Get defect by ID
    async findById(id) {
        try {
            const defect = await Defect.findByPk(id);
            if (!defect) {
                throw new Error('Defect not found');
            }
            return defect;
        } catch (error) {
            throw new Error(`Error fetching defect: ${error.message}`);
        }
    }

    // Create new defect
    async create(defectData) {
        try {
            return await Defect.create(defectData);
        } catch (error) {
            throw new Error(`Error creating defect: ${error.message}`);
        }
    }

    // Update defect
    async update(id, defectData) {
        try {
            const defect = await this.findById(id);
            return await defect.update(defectData);
        } catch (error) {
            throw new Error(`Error updating defect: ${error.message}`);
        }
    }

    // Delete defect
    async delete(id) {
        try {
            const defect = await this.findById(id);
            await defect.destroy();
            return { message: 'Defect deleted successfully' };
        } catch (error) {
            throw new Error(`Error deleting defect: ${error.message}`);
        }
    }

    // Search defects by defect_id
    async findByDefectId(defectId) {
        try {
            return await Defect.findAll({
                where: {
                    defect_id: {
                        [require('sequelize').Op.like]: `%${defectId}%`
                    }
                },
                order: [['defect_id', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error searching defects: ${error.message}`);
        }
    }

    // Find defects by status
    async findByStatus(statusId) {
        try {
            return await Defect.findAll({
                where: {
                    defect_status_id: statusId
                },
                order: [['defect_id', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching defects by status: ${error.message}`);
        }
    }

    // Find defects by priority
    async findByPriority(priorityId) {
        try {
            return await Defect.findAll({
                where: {
                    priority_id: priorityId
                },
                order: [['priority_id', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching defects by priority: ${error.message}`);
        }
    }

    // Find defects by severity
    async findBySeverity(severityId) {
        try {
            return await Defect.findAll({
                where: {
                    severity_id: severityId
                },
                order: [['severity_id', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching defects by severity: ${error.message}`);
        }
    }

    // Find defects by project
    async findByProject(projectId) {
        try {
            return await Defect.findAll({
                where: {
                    project_id: projectId
                },
                order: [['defect_id', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching defects by project: ${error.message}`);
        }
    }

    // Find defects by module
    async findByModule(moduleId) {
        try {
            return await Defect.findAll({
                where: {
                    modules_id: moduleId
                },
                order: [['defect_id', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching defects by module: ${error.message}`);
        }
    }

    // Find defects by sub-module
    async findBySubModule(subModuleId) {
        try {
            return await Defect.findAll({
                where: {
                    sub_module_id: subModuleId
                },
                order: [['defect_id', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching defects by sub-module: ${error.message}`);
        }
    }

    // Find defects assigned to user
    async findByAssignedTo(userId) {
        try {
            return await Defect.findAll({
                where: {
                    assigned_to: userId
                },
                order: [['defect_id', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching defects by assigned user: ${error.message}`);
        }
    }

    // Find defects assigned by user
    async findByAssignedBy(userId) {
        try {
            return await Defect.findAll({
                where: {
                    assigned_by: userId
                },
                order: [['defect_id', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching defects by assigning user: ${error.message}`);
        }
    }

    // Find defects by type
    async findByType(typeId) {
        try {
            return await Defect.findAll({
                where: {
                    type_id: typeId
                },
                order: [['defect_id', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching defects by type: ${error.message}`);
        }
    }

    // Get defect count
    async count() {
        try {
            return await Defect.count();
        } catch (error) {
            throw new Error(`Error counting defects: ${error.message}`);
        }
    }

    // Check if defect exists by defect_id
    async existsByDefectId(defectId) {
        try {
            const defect = await Defect.findOne({
                where: {
                    defect_id: defectId
                }
            });
            return !!defect;
        } catch (error) {
            throw new Error(`Error checking defect existence: ${error.message}`);
        }
    }

    // Get defects with high re-open count
    async findByReopenCount(minCount) {
        try {
            return await Defect.findAll({
                where: {
                    re_open_count: {
                        [require('sequelize').Op.gte]: minCount
                    }
                },
                order: [['re_open_count', 'DESC']]
            });
        } catch (error) {
            throw new Error(`Error fetching defects by reopen count: ${error.message}`);
        }
    }
}

module.exports = new DefectRepository();
