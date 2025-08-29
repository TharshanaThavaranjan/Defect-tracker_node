const defectRemarkService = require('../services/defectRemarkService');

class DefectRemarkController {
  async getDefectRemarkRatio(req, res) {
    try {
      const { projectId } = req.params;
      const result = await defectRemarkService.getDefectRemarkRatio(projectId);

      if (result.success) {
        return res.status(200).json({
          success: true,
          defectRemarkRatio: result.defectRemarkRatio,
          validDefects: result.validDefects,
          totalDefects: result.totalDefects,
          duplicateDefects: result.duplicateDefects,
          rejectedDefects: result.rejectedDefects,
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

module.exports = new DefectRemarkController();
