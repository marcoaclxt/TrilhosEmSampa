var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function getLinhaFavorita() {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT
            linha.nome,
            COUNT(*) AS quantidade,
            linha.cor
        FROM usuario
        JOIN linha ON usuario.fk_linha = linha.id
        GROUP BY linha.nome, linha.cor
        ORDER BY quantidade ASC;
    `;

    return database.executar(instrucaoSql);
}

function getEstacaoFavorita() {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT 
            e.nome, 
            count(e.id) as quantidade
        FROM usuario u 
        JOIN estacao e on u.estacaoFavorita = e.id 
        GROUP BY e.nome
        ORDER BY quantidade ASC;
    `;

    return database.executar(instrucaoSql);
}

function getFrotaFavorita() {
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

function postQuiz(idUsuario, pontos) {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO questionario (pontos, fk_usuario) VALUES (${pontos}, ${idUsuario});
    `;

    return database.executar(instrucaoSql);
}

function getQuizPoints(idUsuario) {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT 
            u.nome, 
            MAX(q.pontos) 
        FROM questionario q
        JOIN usuario u ON u.id = q.fk_usuario
        WHERE u.id = ${idUsuario}
        GROUP BY u.nome;
    `;

    return database.executar(instrucaoSql);
}


module.exports = {
    getLinhaFavorita, getEstacaoFavorita, getFrotaFavorita, getFrequenciaMetro, postQuiz, getQuizPoints
};