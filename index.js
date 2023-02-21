const express = require('express');
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/demo', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});


const app = express();

const userRoute = require('./routes/user');

app.use(express.json());

userRoute(app);

app.listen(3000, () => {
    console.log('Server successfully launched');
});