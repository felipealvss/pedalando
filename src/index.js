const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb+srv://felipealvss:pedalando@cluster0-dfwub.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.use((req, res, next) => {
    req.io = io;

    next();
})

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'upload')))

app.use(require('./routes.js'));

const port = 3030;

app.listen(process.env.PORT || port);
