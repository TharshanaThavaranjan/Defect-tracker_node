const defectSeverityService = require('../services/defectSeverityService');

class DefectSeverityController {
  async getDefectSeverityIndex(req, res) {
    try {
      const { projectId } = req.params;
      const result = await defectSeverityService.getDefectSeverityIndex(projectId);

      if (result.success) {
        return res.status(200).json({
          success: true,
          defectSeverityIndex: result.defectSeverityIndex,
          actualSeverityScore: result.actualSeverityScore,
          maxPossibleSeverityScore: result.maxPossibleSeverityScore,
          totalDefects: result.totalDefects,
          maxSeverityWeight: result.maxSeverityWeight,
          message: result.message
        });
      } else {
        return res.status(400).json({
          success: false,
          error: result.error,
          message: result.message
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
        message: 'Internal server error'
      });
    }
  }
}

module.exports = new DefectSeverityController();
