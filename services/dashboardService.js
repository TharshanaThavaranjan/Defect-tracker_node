const dashboardRepository = require('../repository/dashboardRepository');

class DashboardService {
    async getDefectDensity(projectId) {
        try {
            const kloc = await dashboardRepository.getProjectKLOC(projectId);
            const totalDefects = await dashboardRepository.getTotalDefects(projectId);
            const duplicateDefects = await dashboardRepository.getDefectCountByStatus(projectId, 'Duplicate');
            const rejectedDefects = await dashboardRepository.getDefectCountByStatus(projectId, 'Rejected');

            const validDefects = totalDefects - (duplicateDefects + rejectedDefects);
            const defectDensity = kloc > 0 ? validDefects / kloc : 0;

            let color = 'green';
            if (defectDensity > 10) color = 'red';
            else if (defectDensity > 7) color = 'yellow';

            return {
                success: true,
                defectDensity,
                color,
                validDefects,
                kloc,
                message: 'Defect density calculated successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to calculate defect density'
            };
        }
    }

    async getDefectSeverityIndex(projectId) {
        try {
            const defectCounts = await dashboardRepository.getDefectCountsBySeverity(projectId);
            const totalDefects = await dashboardRepository.getTotalDefects(projectId);
            const maxSeverityWeight = await dashboardRepository.getMaxSeverityWeight();

            let actualSeverityScore = 0;
            for (const key in defectCounts) {
                const { count, weight } = defectCounts[key];
                actualSeverityScore += count * weight;
            }
            const maxPossibleSeverityScore = totalDefects * maxSeverityWeight;
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

module.exports = new DashboardService();