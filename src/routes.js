const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const trilhaController = require('./controllers/trilhaController');

const routes = new express.Router();
const upload = multer();

/* Rota opcional, upload de foto do mapa */ 
routes.post('/trilha', upload.single('mapa'), trilhaController.Store);
routes.get('/trilha', trilhaController.index);

routes.get('/leve', );

routes.get('/medio', );

routes.get('/pesado', );

module.exports = routes;
