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

module.exports = {
    getLinhaFavorita, getEstacaoFavorita, getFrotaFavorita, getFrequenciaMetro

}