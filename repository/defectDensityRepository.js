const Project = require('../models/project');
const Defect = require('../models/defect');
const DefectStatus = require('../models/defect_status');

module.exports = {
  async getProjectKLOC(projectId) {
    const project = await Project.findByPk(projectId);
    return project ? project.kloc : 0;
  },

  async getTotalDefects(projectId) {
    return await Defect.count({ where: { project_id: projectId } });
  },

  async getDefectCountByStatus(projectId, statusName) {
    const status = await DefectStatus.findOne({ where: { defectStatus: statusName } });
    if (!status) return 0;
    return await Defect.count({
      where: {
        project_id: projectId,
        defect_status_id: status.id
      }
    });
  }
};
