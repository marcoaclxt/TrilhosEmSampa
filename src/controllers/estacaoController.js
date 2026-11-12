var estacaoModel = require("../models/estacaoModel");

function listar(req, res) {
    estacaoModel.listar()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).send("Erro ao buscar estações.");
        });
}

module.exports = { listar };