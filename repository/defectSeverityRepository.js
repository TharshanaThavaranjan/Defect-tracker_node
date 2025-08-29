const Defect = require('../models/defect');
const Severity = require('../models/severity');

module.exports = {
  async getDefectCountsBySeverity(projectId) {
    const severities = await Severity.findAll();
    const result = [];
    for (const severity of severities) {
      const count = await Defect.count({
        where: {
          project_id: projectId,
          severity_id: severity.id
        }
      });
      result.push({ count, weight: severity.weight });
    }
    return result;
  },

  async getTotalDefects(projectId) {
    return await Defect.count({ where: { project_id: projectId } });
  },

  async getMaxSeverityWeight() {
    return await Severity.max('weight');
  }
};
