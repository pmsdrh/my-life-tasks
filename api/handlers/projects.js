class ProjectsHandler {
    constructor(app, db) {
        this.db = db;
        this.app = app;
    }

    setHandler() {
        this.app.get('/projects/', async (req, res) => {
            const projects = await this.db.Project.findAll()
            res.send(projects)
        });
        this.app.get('/projects/:id', async (req, res) => {
            const project = await this.db.Project.findOne({
                where: {
                    id: req.params.id
                }, include: [
                    {
                        model: this.db.GroupTask,
                        include: [{ model: this.db.Task }]
                    }
                ]
            })
            res.send(project);
        });
        this.app.put('/projects/create', async (req, res) => {
            const project = await this.db.Project.create(req.body)
            console.log(req.body)
            res.send(project);
        });
        this.app.post('/projects/:id/edit', async (req, res) => {
            const project = await this.db.Project.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.send(project);
        });
        this.app.delete('/projects/:id', async (req, res) => {
            const project = await this.db.Project.destroy({
                where: {
                    id: req.params.id
                }
            })
            return res.send(project)
        })

    }
}

module.exports = ProjectsHandler;