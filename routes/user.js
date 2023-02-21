const { userGet, userCreate, userDelete, userUpdate, userLogin } = require('../controllers/user');

function userRoute(app) {
    app.post('/userCreate', userCreate);
    app.get('/users', userGet);
    app.post('/userDelete', userDelete);
    app.post('/userUpdate', userUpdate);
    app.post('/userLogin', userLogin);
};

module.exports = userRoute;