var express = require("express");
var router = express.Router();

var novoController = require("../controllers/novoController");


router.get("/buscarUltimasDoencas", function (req, res) {
    novoController.buscarUltimasDoencas(req, res);
});

router.get("/buscarUltimasDoencas2", function (req, res) {
    novoController.buscarUltimasDoencas2(req, res);
});

router.get("/buscarUltimasDoencas3", function (req, res) {
    novoController.buscarUltimasDoencas3(req, res);
});

router.get("/buscarUltimasDoencas4", function (req, res) {
    novoController.buscarUltimasDoencas4(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    novoController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    novoController.autenticar(req, res);
});

module.exports = router;