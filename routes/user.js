const { userGet, userCreate } = require('../controllers/user');

function userRoute(app) {
    app.post('/userCreate', userCreate);
    app.get('/user', userGet);
};

module.exports = userRoute;