var empresaModel = require("../models/buscarCleanAirModel");

function buscarPorDoenca(req, res) {
  var doenca = req.query.doenca;

  buscarCleanAirModel.buscarPorDoenca(doenca).then((resultado) => {
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

  buscarCleanAirModel.buscarPorId(idUsuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var fkUsuario = req.body.idUsuario;
  var fkDoencas = req.body.doenca;

  buscarCleanAirModel.buscarPorDoenca(doenca).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
    } else {
      buscarCleanAirModel.cadastrar(fkUsuario, fkDoencas).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorDoenca,
  buscarPorId,
  cadastrar,
  listar,
};
