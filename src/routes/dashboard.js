var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.get("/getLinhaFavorita", function (req, res) {
    dashController.getLinhaFavorita(req, res);
});

router.get("/getEstacaoFavorita", function (req, res) {
    dashController.getEstacaoFavorita(req, res);
});

router.get("/getFrotaFavorita", function (req, res) {
    dashController.getFrotaFavorita(req, res);
});

router.get("/getFrequenciaMetro", function (req, res) {
    dashController.getFrequenciaMetro(req, res);
});

module.exports = router;