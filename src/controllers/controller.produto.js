import ProdutoModel from "../models/model.produto.js";

class ProdutoController {

    static getAllProdutos(req, res) {
        try {
            ProdutoModel.getAllProdutos(function(err, result){
                if (err) {
                    console.error(err);
                    return res.status(500).json( {error: "Algo de errado não está certo ao buscar os produtos."} );
                }

                return res.status(200).json(result);
            });

        } catch (error) {
            // Capatura qualquer exceção não tratada
            console.error(error);
            // Retorna uma resposta de erro 500
            res.status(500).json( { error: "Erro interno no sevidor." } );
        }
    }

}

export default ProdutoController;