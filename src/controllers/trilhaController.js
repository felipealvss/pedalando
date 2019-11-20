const Trilha = require('../models/trilhaModel');

module.exports = {
    async index(req, res) {
        const trilhas = await Trilha.find().sort('-createdAt')

        return res.json(trilhas)
    },

    async Store(req, res){
        const { nome, distancia, endereco, descricao } = req.body;
        const { filename: mapa } = req.file;

        const post = await Trilha.create({
            nome,
            distancia,
            endereco,
            descricao,
            mapa
        })

        return res.json(post)
    }
}
