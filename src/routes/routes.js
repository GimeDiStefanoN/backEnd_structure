const controllers = require('../controllers/controllers');
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');

module.exports = (app) => {

    app.get('/', controllers.homeView);

    app.get('/appUsers', controllers.readUsers);

    app.post('/createUser', controllers.createUser);

    app.post('/updateUser/:id', controllers.updateUser);

    app.post('/deleteUser/:id', controllers.deleteUser);
}