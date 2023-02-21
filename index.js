const express = require('express');
const mongoose = require('mongoose');

const models = require('./models');

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/DriveSud', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});


const app = express();

app.set('models', models);

const userRoute = require('./routes/user');

app.use(express.json());

userRoute(app);

app.listen(3000, () => {
    console.log('Server successfully launched');
});