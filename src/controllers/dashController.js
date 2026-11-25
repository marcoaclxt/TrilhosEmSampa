var dashModel = require("../models/dashModel");

function getLinhaFavorita(req, res) {

    dashModel.getLinhaFavorita()
        .then((result) => {
            res.json(result)
        })

}

function getEstacaoFavorita(req, res) {

    dashModel.getEstacaoFavorita()
        .then((result) => {
            res.json(result)
        })

}

function getFrotaFavorita(req, res) {

    dashModel.getFrotaFavorita()
        .then((result) => {
            res.json(result)
        })

}

function getFrequenciaMetro(req, res) {

    dashModel.getFrequenciaMetro()
        .then((result) => {
            res.json(result)
        })

}

function postQuiz(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var pontos = req.body.pontosServer;

    dashModel.postQuiz(idUsuario, pontos)
        .then((resultado) => {
            res.status(201).json(resultado);
        }
        ).catch((erro) => {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o post do Quiz! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    getLinhaFavorita, getEstacaoFavorita, getFrotaFavorita, getFrequenciaMetro, postQuiz

}