const { Project } = require('../models');

class ProjectRepository {
    async create(Project) {
        return await Project.create(task);
    }
    
    async findAll() {
        return await Project.findAll();
    }
    
    async findById(id) {
        return await Project.findByPk(id);
    }

    async update(id, project) {
        return await Project.update(
            project, {
                where: {id}
            }
        );
    }

    async delete(id) {
        return await Project.destroy({
            where: {id}
        });
    }
}

module.exports = new ProjectRepository();
