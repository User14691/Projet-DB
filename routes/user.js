const { userGet, userCreate, userDelete } = require('../controllers/user');

function userRoute(app) {
    app.post('/userCreate', userCreate);
    app.get('/user', userGet);
    app.post('/userDelete', userDelete);
};

module.exports = userRoute;