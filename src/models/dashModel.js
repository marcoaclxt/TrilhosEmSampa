var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function getLinhaFavorita() {
        console.log("ACESSEI O USUARIO MODEL>> Se aqui der e")
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       select linhaFavorita from usuario;
    `;

    return database.executar(instrucaoSql);
}

function getEstacaoFavorita() {
        console.log("ACESSEI O USUARIO MODEL>> Se aqui der e")
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       select estacaoFavorita from usuario;
    `;

    return database.executar(instrucaoSql);
}

function getFrotaFavorita() {
        console.log("ACESSEI O USUARIO MODEL>> Se aqui der e")
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       select frotaFavorita from usuario;
    `;

    return database.executar(instrucaoSql);
}

function getFrequenciaMetro() {
        console.log("ACESSEI O USUARIO MODEL>> Se aqui der e")
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       select frequenciaMetro from usuario;
    `;

    return database.executar(instrucaoSql);
}


module.exports = {
    getLinhaFavorita, getEstacaoFavorita, getFrotaFavorita, getFrequenciaMetro
};