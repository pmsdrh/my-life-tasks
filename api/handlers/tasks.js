class TasksHandler {
    constructor(app, db) {
        this.db = db;
        this.app = app;
    }

    setHandler() {
        this.app.get('/tasks', async (req, res) => {
            const tasks = await this.db.Task.findAll()
            res.send(tasks)
        });
        this.app.get('/tasks/:id', async (req, res) => {
            const task = await this.db.Task.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.send(task);
        });
        this.app.put('/tasks/create', async (req, res) => {
            const task = await this.db.Task.create(req.body)
            console.log(req.body)
            res.send(task);
        });
        this.app.post('/tasks/:id/edit', async (req, res) => {
            const task = await this.db.Task.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.send(task);
        });
        this.app.delete('/tasks/:id', async (req, res) => {
            const task = await this.db.Task.destroy({
                where: {
                    id: req.params.id
                }
            })
            return res.send(task)
        })

    }
}

module.exports = TasksHandler;