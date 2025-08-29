```javascript
const defectDensityRepository = require('../repository/defectDensityRepository');

class DefectDensityService {
  async getDefectDensity(projectId) {
    try {
      const kloc = await defectDensityRepository.getProjectKLOC(projectId);
      const totalDefects = await defectDensityRepository.getTotalDefects(projectId);
      const duplicateDefects = await defectDensityRepository.getDefectCountByStatus(projectId, 'Duplicate');
      const rejectedDefects = await defectDensityRepository.getDefectCountByStatus(projectId, 'Rejected');
      const validDefects = totalDefects - (duplicateDefects + rejectedDefects);

      const defectDensity = kloc > 0 ? validDefects / kloc : 0;
      let color = 'green';
      if (defectDensity > 10) color = 'red';
      else if (defectDensity > 7) color = 'yellow';

      return {
        success: true,
        defectDensity: defectDensity.toFixed(2),
        color,
        validDefects,
        kloc,
        totalDefects,
        duplicateDefects,
        rejectedDefects,
        message: 'Defect Density calculated successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to calculate Defect Density'
      };
    }
  }
}

module.exports = new DefectDensityService();
```