var dashModel = require("../models/dashModel");

function getDados(req, res) {


    dashModel.getDados()
        .then((result) => {
            res.json(result)
        })

}

module.exports = {
    getDados
}