class GroupTasksHandler {
    constructor(app, db) {
        this.db = db;
        this.app = app;
    }

    setHandler() {
        this.app.put('/group-tasks/create', async (req, res) => {
            const grouptask = await this.db.GroupTask.create(req.body)
            console.log('hello')
            res.send(grouptask);
        });
        this.app.post('/group-tasks/:id/edit', async (req, res) => {
            const grouptask = await this.db.GroupTask.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.send(grouptask);
        });
        this.app.delete('/group-tasks/:id', async (req, res) => {
            const grouptask = await this.db.GroupTask.destroy({
                where: {
                    id: req.params.id
                }
            })
            return res.send(grouptask)
        })

    }
}

module.exports = GroupTasksHandler;