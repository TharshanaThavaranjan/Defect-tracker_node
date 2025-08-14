const Designation = require('../models/designation');

class DesignationRepository {
    // Get all designations
    async findAll() {
        try {
            return await Designation.findAll({
                order: [['id', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error fetching designations: ${error.message}`);
        }
    }

    // Get designation by ID
    async findById(id) {
        try {
            const designation = await Designation.findByPk(id);
            if (!designation) {
                throw new Error('Designation not found');
            }
            return designation;
        } catch (error) {
            throw new Error(`Error fetching designation: ${error.message}`);
        }
    }

    // Create new designation
    async create(designationData) {
        try {
            return await Designation.create(designationData);
        } catch (error) {
            throw new Error(`Error creating designation: ${error.message}`);
        }
    }

    // Update designation
    async update(id, designationData) {
        try {
            const designation = await this.findById(id);
            return await designation.update(designationData);
        } catch (error) {
            throw new Error(`Error updating designation: ${error.message}`);
        }
    }

    // Delete designation
    async delete(id) {
        try {
            const designation = await this.findById(id);
            await designation.destroy();
            return { message: 'Designation deleted successfully' };
        } catch (error) {
            throw new Error(`Error deleting designation: ${error.message}`);
        }
    }

    // Search designations by name
    async findByName(name) {
        try {
            return await Designation.findAll({
                where: {
                    designation: {
                        [require('sequelize').Op.like]: `%${name}%`
                    }
                },
                order: [['designation', 'ASC']]
            });
        } catch (error) {
            throw new Error(`Error searching designations: ${error.message}`);
        }
    }

    // Get designation count
    async count() {
        try {
            return await Designation.count();
        } catch (error) {
            throw new Error(`Error counting designations: ${error.message}`);
        }
    }

    // Check if designation exists by name
    async existsByName(name) {
        try {
            const designation = await Designation.findOne({
                where: {
                    designation: name
                }
            });
            return !!designation;
        } catch (error) {
            throw new Error(`Error checking designation existence: ${error.message}`);
        }
    }
}

module.exports = new DesignationRepository();
