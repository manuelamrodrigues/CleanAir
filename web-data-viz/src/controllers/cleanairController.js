var cleanairModel = require("../models/cleanairModel");


function autenticar(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkDoencas = req.body.fkDoencasServer;

    if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    } else if (fkDoencas == undefined) {
        res.status(400).send("Sua fkDoencas está indefinida!");
    } else {

        cleanairModel.autenticar(fkUsuario, fkDoencas)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                                            fkUsuario: resultadoAutenticar[0].fkUsuario,
                                            fkDoencas: resultadoAutenticar[0].fkDoencas,
                                            // nome: resultadoAutenticar[0].nome,
                                            // senha: resultadoAutenticar[0].senha,
                                        });
                        // aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                        //     .then((resultadoAquarios) => {
                        //         if (resultadoAquarios.length > 0) {
                        //             res.json({
                        //                 id: resultadoAutenticar[0].id,
                        //                 email: resultadoAutenticar[0].email,
                        //                 nome: resultadoAutenticar[0].nome,
                        //                 senha: resultadoAutenticar[0].senha,
                        //                 aquarios: resultadoAquarios
                        //             });
                        //         } else {
                        //             res.status(204).json({ aquarios: [] });
                        //         }
                        //     })
                    } 
                    else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("fkUsuario e/ou fkDoencas inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.fkUsuarioServer;
    var fkDoencas = req.body.fkDoencasServer;
    // var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    } else if (fkDoencas == undefined) {
        res.status(400).send("Seu fkDoencas está undefined!");
    } 
    // else if (senha == undefined) {
    //     res.status(400).send("Sua senha está undefined!");
    // } 
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(fkUsuario, fkDoencas)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
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