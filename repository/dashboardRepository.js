const Project = require('../models/project');
const Defect = require('../models/defect');
const Severity = require('../models/severity');

class DashboardRepository {
    // ...existing code...

    async getProjectKLOC(projectId) {
        const project = await Project.findByPk(projectId);
        return project ? project.kloc : 0;
    }

    async getTotalDefects(projectId) {
        return await Defect.count({ where: { project_id: projectId } });
    }

    async getDefectCountByStatus(projectId, status) {
        return await Defect.count({
            where: {
                project_id: projectId,
                defect_status_id: status // If defect_status_id is a string status, otherwise join with status table
            }
        });
    }

    async getDefectCountsBySeverity(projectId) {
        // Get all severities
        const severities = await Severity.findAll();
        const result = {};
        for (const severity of severities) {
            const count = await Defect.count({
                where: {
                    project_id: projectId,
                    severity_id: severity.id
                }
            });
            result[severity.id] = { count, weight: severity.weight };
        }
        return result;
    }

    async getMaxSeverityWeight() {
        const maxSeverity = await Severity.max('weight');
        return maxSeverity || 1;
    }
}

module.exports = new DashboardRepository();