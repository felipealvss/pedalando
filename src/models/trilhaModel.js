const mongoose = require('mongoose');

const trilhaSchema = new mongoose.Schema({
    nome: String,
    distancia: String,
    endereco: String,
    descricao: String,
    mapa: String
},{
    timestamps: true
})

module.exports = mongoose.model('trilha',trilhaSchema);
