const glob = require('glob');
const path = require('path');


const api = (app, db) => {

    const middlewares = [];
    glob.sync('./api/middlewares/*.js').forEach(function (file) {
        middlewares.push(require(path.resolve(file)));
    });

    middlewares.forEach(d => {
        const h = new d(app, db);
        if (typeof h.setMiddleware === 'function') {
            h.setMiddleware();
        }
    });


    const handlers = [];
    glob.sync('./api/handlers/**/*.js').forEach(function (file) {
        handlers.push(require(path.resolve(file)));
    });

    handlers.forEach(d => {
        const h = new d(app, db);
        if (typeof h.setHandler === 'function') {
            h.setHandler();
        }
    });
}



module.exports = api