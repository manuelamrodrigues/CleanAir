var express = require("express");
var router = express.Router();

var buscarCleanAirController = require("../controllers/buscarCleanAirController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    buscarCleanAirController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    buscarCleanAirController.buscarPorDoenca(req, res);
});

router.get("/buscar/:idUsuario", function (req, res) {
  buscarCleanAirController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  buscarCleanAirController.listar(req, res);
});

module.exports = router;