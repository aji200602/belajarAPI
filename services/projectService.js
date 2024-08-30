const projectRepository = require('../repositories/projectRepository');
const express = require('express');
const router = express.Router();

class ProjectService {
    async createProject(project) {
        return await projectRepository.create(project);
    }
    
    async getAllProjects() {
        return await projectRepository.findAll();
    }
    
    async getProjectById(id) {
        return await projectRepository.findById(id);
    }

    async updateTask(id, project) {
        return await projectRepository.update(id, project);
    }

    async deleteTask(id) {
        return await projectRepository.destroy(id);
    }
}

module.exports = new ProjectService();