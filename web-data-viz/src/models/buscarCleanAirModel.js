var database = require("../database/config");

function buscarPorId(idUsuario) {
  var instrucaoSql = `SELECT idUsuario FROM usuario WHERE idUsuario = '${idUsuario}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT doencas.nome AS nomeDoenca, 
  usuario.idUsuario AS idUsuario,
  COUNT(usuario.idUsuario) AS qntUsuarios
  FROM dashboard JOIN 
  USUARIO on fkUsuario = idUsuario 
  JOIN doencas on fkDoencas = idDoenca
  GROUP BY doencas.nome, usuario.idUsuario`;

  return database.executar(instrucaoSql);
}

function buscarPorDoenca(idDoenca) {
  var instrucaoSql = `SELECT * FROM doencas WHERE idDoenca = '${idDoenca}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(fkUsuario, fkDoencas) {
  var instrucaoSql = `INSERT INTO dashboard (fkUsuario, fkDoencas) VALUES ('${fkUsuario}', '${fkDoencas}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorDoenca, buscarPorId, cadastrar, listar };
