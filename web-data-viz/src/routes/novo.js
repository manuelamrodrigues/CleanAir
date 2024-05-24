var express = require("express");
var router = express.Router();

var novoController = require("../controllers/novoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    novoController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    novoController.autenticar(req, res);
});

module.exports = router;