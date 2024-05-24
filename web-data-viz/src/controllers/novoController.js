var novoModel = require("../models/novoModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var selectDoencas = req.body.selectDoencasServer;
    // var senha = req.body.senhaServer;

    // if (selectDoencas == undefined) {
    //     res.status(400).send("Seu select está undefined!");
    // } 
    // // else if (senha == undefined) {
    // //     res.status(400).send("Sua senha está indefinida!");
    // // } 
    // else {

        novoModel.autenticar()
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.status(200).json(resultadoAutenticar)               
                    } 
                    else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Não foi possível fazer select no banco de dados!");
                    } 
                    else {
                        res.status(403).send("Já foram feitas Selects");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao cadastrar doença! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

// }

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idUsuarioServer;
    var nomeDoenca = req.body.nomeDoencaServer;
    // var email = req.body.emailServer;
    // var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("Seu select está undefined!");
    } else if(nomeDoenca== undefined) {
        res.status(400).send("Seu select está undefined!");
    }
    // else if (email == undefined) {
    //     res.status(400).send("Seu email está undefined!");
    // } 
    // else if (senha == undefined) {
    //     res.status(400).send("Sua senha está undefined!");
    // } 
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        novoModel.cadastrar(nomeDoenca,idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar doença! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}