const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://felipealvss:pedalando@cluster0-dfwub.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.use(require('./routes.js'));

const port = 3030;

app.listen(port);
