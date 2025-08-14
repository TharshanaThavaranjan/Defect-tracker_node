const designationRepository = require('../repositories/designationRepository');

class DesignationService {
    // Get all designations
    async getAllDesignations() {
        try {
            const designations = await designationRepository.findAll();
            return {
                success: true,
                data: designations,
                message: 'Designations retrieved successfully',
                count: designations.length
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve designations'
            };
        }
    }

    // Get designation by ID
    async getDesignationById(id) {
        try {
            // Validate ID
            if (!id || isNaN(id)) {
                throw new Error('Invalid designation ID');
            }

            const designation = await designationRepository.findById(id);
            return {
                success: true,
                data: designation,
                message: 'Designation retrieved successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve designation'
            };
        }
    }

    // Create new designation
    async createDesignation(designationData) {
        try {
            // Validate required fields
            if (!designationData.designation || designationData.designation.trim() === '') {
                throw new Error('Designation name is required');
            }

            // Validate designation name length
            if (designationData.designation.trim().length < 2) {
                throw new Error('Designation name must be at least 2 characters long');
            }

            if (designationData.designation.trim().length > 255) {
                throw new Error('Designation name must not exceed 255 characters');
            }

            // Check for duplicate designation
            const exists = await designationRepository.existsByName(designationData.designation.trim());
            if (exists) {
                throw new Error('Designation already exists');
            }

            const designation = await designationRepository.create({
                designation: designationData.designation.trim()
            });

            return {
                success: true,
                data: designation,
                message: 'Designation created successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to create designation'
            };
        }
    }

    // Update designation
    async updateDesignation(id, designationData) {
        try {
            // Validate ID
            if (!id || isNaN(id)) {
                throw new Error('Invalid designation ID');
            }

            // Validate required fields
            if (!designationData.designation || designationData.designation.trim() === '') {
                throw new Error('Designation name is required');
            }

            // Validate designation name length
            if (designationData.designation.trim().length < 2) {
                throw new Error('Designation name must be at least 2 characters long');
            }

            if (designationData.designation.trim().length > 255) {
                throw new Error('Designation name must not exceed 255 characters');
            }

            // Check if another designation with the same name exists (excluding current one)
            const existingDesignations = await designationRepository.findByName(designationData.designation.trim());
            const duplicateExists = existingDesignations.some(d => d.id != id);
            if (duplicateExists) {
                throw new Error('Another designation with this name already exists');
            }

            const designation = await designationRepository.update(id, {
                designation: designationData.designation.trim()
            });

            return {
                success: true,
                data: designation,
                message: 'Designation updated successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to update designation'
            };
        }
    }

    // Delete designation
    async deleteDesignation(id) {
        try {
            // Validate ID
            if (!id || isNaN(id)) {
                throw new Error('Invalid designation ID');
            }

            const result = await designationRepository.delete(id);
            return {
                success: true,
                data: result,
                message: 'Designation deleted successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to delete designation'
            };
        }
    }

    // Search designations
    async searchDesignations(searchTerm) {
        try {
            if (!searchTerm || searchTerm.trim() === '') {
                throw new Error('Search term is required');
            }

            if (searchTerm.trim().length < 2) {
                throw new Error('Search term must be at least 2 characters long');
            }

            const designations = await designationRepository.findByName(searchTerm.trim());
            return {
                success: true,
                data: designations,
                message: 'Search completed successfully',
                count: designations.length,
                searchTerm: searchTerm.trim()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Search failed'
            };
        }
    }

    // Get designation statistics
    async getDesignationStats() {
        try {
            const totalCount = await designationRepository.count();
            const allDesignations = await designationRepository.findAll();
            
            return {
                success: true,
                data: {
                    totalCount,
                    designations: allDesignations.map(d => ({
                        id: d.id,
                        designation: d.designation
                    }))
                },
                message: 'Statistics retrieved successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve statistics'
            };
        }
    }
}

module.exports = new DesignationService();
