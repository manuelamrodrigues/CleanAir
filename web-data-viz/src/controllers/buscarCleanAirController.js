var buscarCleanAirModel = require("../models/buscarCleanAirModel");

function buscarPorDoenca(req, res) {
  var doenca = req.query.doenca;

  buscarCleanAirModel.buscarPorDoenca(doenca).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  buscarCleanAirModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var idUsuario = req.params.idUsuario;

  buscarCleanAirModel.buscarPorId(idUsuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var idUsuario = req.body.idUsuario;
  var idDoenca = req.body.idDoenca;
  console.log("controller")

  // Verifica se já existe alguma entrada para o usuário e doenças fornecidos
  buscarCleanAirModel.cadastrar(idUsuario, idDoenca).then((resultado) => {
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
