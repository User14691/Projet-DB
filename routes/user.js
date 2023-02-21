const { userGet } = require('../controllers/user');

function userRoute(app) {
    app.get('/user', userGet);
};

module.exports = userRoute;