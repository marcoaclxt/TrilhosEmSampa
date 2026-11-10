var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.get("/a", function (req, res) {
    console.log("oi")
    dashController.getDados(req, res);
});

module.exports = router;