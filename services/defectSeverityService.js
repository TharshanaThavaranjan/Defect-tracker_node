const defectSeverityRepository = require('../repository/defectSeverityRepository');

class DefectSeverityService {
  async getDefectSeverityIndex(projectId) {
    try {
      const defectCounts = await defectSeverityRepository.getDefectCountsBySeverity(projectId);
      const totalDefects = await defectSeverityRepository.getTotalDefects(projectId);
      const maxSeverityWeight = await defectSeverityRepository.getMaxSeverityWeight();

      let actualSeverityScore = 0;
      for (const { count, weight } of defectCounts) {
        actualSeverityScore += count * weight;
      }
      const maxPossibleSeverityScore = totalDefects * (maxSeverityWeight || 1);
      const defectSeverityIndex = maxPossibleSeverityScore > 0
        ? (actualSeverityScore / maxPossibleSeverityScore) * 100
        : 0;

      return {
        success: true,
        defectSeverityIndex: defectSeverityIndex.toFixed(2),
        actualSeverityScore,
        maxPossibleSeverityScore,
        totalDefects,
        maxSeverityWeight,
        message: 'Defect Severity Index calculated successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to calculate Defect Severity Index'
      };
    }
  }
}

module.exports = new DefectSeverityService();
