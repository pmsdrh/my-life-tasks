const express = require('express');
const api = require('./api');
const db = require('./database/models');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

async function main() {
    // saleh: uncomment this if you dont have data on your database
    // await db.sequelize.sync({ force: true });
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    api(app, db);

    app.listen(3000, () => console.log('listening on port 3000.'));
}

main();