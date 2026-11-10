var dashModel = require("../models/dashModel");

function getDados(res) {
    
    console.log("controller1")
    
    dashModel.getDados().then((result) => {    
        console.log("controller2")
        res.json(result)
    })

}

module.exports = {
    getDados
}