var database = require("../database/config");

function listar() {
    var instrucaoSql = `
        SELECT id, nome
        FROM estacao
        ORDER BY nome;
    `;

    return database.executar(instrucaoSql);
}

module.exports = { listar };