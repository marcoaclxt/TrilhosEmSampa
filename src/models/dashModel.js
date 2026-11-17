var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function getLinhaFavorita() {
    console.log("ACESSEI O USUARIO MODEL>> Se aqui der e")

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT
            linha.nome,
            COUNT(*) AS quantidade
        FROM usuario
        JOIN linha ON usuario.fk_linha = linha.id
        GROUP BY linha.nome
        ORDER BY quantidade DESC;
    `;

    return database.executar(instrucaoSql);
}

function getEstacaoFavorita() {
    console.log("ACESSEI O USUARIO MODEL>> Se aqui der e")

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT 
            e.nome, 
            count(e.id) as quantidade
        FROM usuario u 
        JOIN estacao e on u.estacaoFavorita = e.id 
        GROUP BY e.nome;
    `;

    return database.executar(instrucaoSql);
}

function getFrotaFavorita() {
    console.log("ACESSEI O USUARIO MODEL>> Se aqui der e")

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT 
            frotaFavorita as nome,
            COUNT(frotaFavorita) as quantidade
        FROM usuario
        GROUP BY frotaFavorita;
    `;

    return database.executar(instrucaoSql);
}

function getFrequenciaMetro() {
    console.log("ACESSEI O USUARIO MODEL>> Se aqui der e")

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
      SELECT 
	        frequenciaMetro,
            COUNT(frequenciaMetro) as quantidade
        FROM usuario 
        GROUP BY frequenciaMetro;
    `;

    return database.executar(instrucaoSql);
}


module.exports = {
    getLinhaFavorita, getEstacaoFavorita, getFrotaFavorita, getFrequenciaMetro
};