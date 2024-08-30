const projectService = require('../services/projectService');

class ProjectController {
    async createProject(req, res){
        const project = await projectService.createProject(req.body);
        res.status(201).json(project);
    }

    async getAllProject(req, res) {
        const projects = await projectService.getAllProjects();
        res.json(projects);
    }

    async getProjectById(req, res) {
        const project = await projectService.getProjectById(req.params.id);
        res.json(project);
    }

    async updateProject(req, res) {
        await projectService.updateProject(req.params.id, req.body);
        res.status(204).send();
    }

    async deleteProject(req, res) {
        await projectService.deleteProject(req.params.id);
        res.status(204).send();
    }
}

module.exports = new ProjectController();