const { userGet, userCreate, userDelete, userUpdate } = require('../controllers/user');

function userRoute(app) {
    app.post('/userCreate', userCreate);
    app.get('/users', userGet);
    app.post('/userDelete', userDelete);
    app.post('/userUpdate', userUpdate);
};

module.exports = userRoute;