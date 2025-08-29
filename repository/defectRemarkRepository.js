const Defect = require('../models/defect');
const DefectStatus = require('../models/defect_status');

module.exports = {
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
