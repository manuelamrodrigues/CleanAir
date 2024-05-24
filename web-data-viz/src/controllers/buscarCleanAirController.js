var empresaModel = require("../models/buscarCleanAirModel");

function buscarPorDoenca(req, res) {
  var doenca = req.query.doenca;

  empresaModel.buscarPorDoenca(doenca).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var idUsuario = req.params.idUsuario;

  empresaModel.buscarPorId(idUsuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var fkUsuario = req.body.fkUsuario;
  var fkDoencas = req.body.fkDoencas;

  // Verifica se já existe alguma entrada para o usuário e doenças fornecidos
  empresaModel.cadastrar(fkUsuario, fkDoencas).then((resultado) => {
    res.status(201).json(resultado);
  }).catch((erro) => {
    res.status(500).json({ mensagem: "Erro ao cadastrar: " + erro });
  });
}

module.exports = {
  buscarPorDoenca,
  buscarPorId,
  cadastrar,
  listar,
};
