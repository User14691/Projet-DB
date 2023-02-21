const express = require('express');

const app = express();

const userRoute = require('./routes/user');

app.use(express.json());

userRoute(app);

app.listen(3000, () => {
    console.log('Server successfully launched');
});