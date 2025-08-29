const defectRemarkRepository = require('../repository/defectRemarkRepository');

class DefectRemarkService {
  async getDefectRemarkRatio(projectId) {
    try {
      const totalDefects = await defectRemarkRepository.getTotalDefects(projectId);
      const duplicateDefects = await defectRemarkRepository.getDefectCountByStatus(projectId, 'Duplicate');
      const rejectedDefects = await defectRemarkRepository.getDefectCountByStatus(projectId, 'Rejected');
      const validDefects = totalDefects - (duplicateDefects + rejectedDefects);

      const ratio = totalDefects > 0 ? (validDefects / totalDefects) * 100 : 0;

      return {
        success: true,
        defectRemarkRatio: ratio.toFixed(2),
        validDefects,
        totalDefects,
        duplicateDefects,
        rejectedDefects,
        message: 'Defect Remark Ratio calculated successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to calculate Defect Remark Ratio'
      };
    }
  }
}

module.exports = new DefectRemarkService();
