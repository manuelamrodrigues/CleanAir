var express = require("express");
var router = express.Router();

var cleanairController = require("../controllers/cleanairController");

router.get("/:idUsuario", function (req, res) {
  cleanairController.refBanco(req, res);
});

router.post("/cadastrar", function (req, res) {
  cleanairController.cadastrar(req, res);
})

module.exports = router;