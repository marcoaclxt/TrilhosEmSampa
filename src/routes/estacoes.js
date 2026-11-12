var express = require("express");
var router = express.Router();

var estacaoController = require("../controllers/estacaoController");

router.get("/", function (req, res) {
    estacaoController.listar(req, res);
});

module.exports = router;