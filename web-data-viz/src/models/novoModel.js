var database = require("../database/config")


function buscarUltimasDoencas() {

    var instrucaoSql = `SELECT COUNT(nome) as QTD_Dengue FROM doencas WHERE nome = 'dengue'`;
    

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasDoencas2() {

    var instrucaoSql = `SELECT COUNT(nome) as QTD_Malaria FROM doencas WHERE nome = 'malaria'`;
    

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasDoencas3() {

    var instrucaoSql = `SELECT COUNT(nome) as QTD_Leishmaniose FROM doencas WHERE nome = 'leishmaniose'`;
    

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasDoencas4() {

    var instrucaoSql = `SELECT COUNT(nome) as QTD_Febre FROM doencas WHERE nome = 'febre'`;
    

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




function autenticar(idDoenca) {
    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idDoenca)
    var instrucaoSql = `
        SELECT idDoenca FROM doencas WHERE idDoenca = '${idDoenca}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nomeDoenca,idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeDoenca, idUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO doencas (nome, fkUsuario) VALUES ('${nomeDoenca}','${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasDoencas,
    buscarUltimasDoencas2,
    buscarUltimasDoencas3,
    buscarUltimasDoencas4,
    autenticar,
    cadastrar
};