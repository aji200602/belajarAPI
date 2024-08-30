const taskService = require('../services/taskService');

class TaskController {
    async createTask(req, res){
        const task = await taskService.createTask(req.body);
        res.status(201).json(task);
    }

    async getAllTask(req, res) {
        const tasks = await taskService.getAllTasks();
        res.json(tasks);
    }

    async getTaskById(req, res) {
        const task = await taskService.getTaskById(req.params.id);
        res.json(task);
    }

    async updateTask(req, res) {
        await taskService.updateTask(req.params.id, req.body);
        res.status(204).send();
    }

    async deleteTask(req, res) {
        await taskService.deleteTask(req.params.id);
        res.status(204).send();
    }
}

module.exports = new TaskController();