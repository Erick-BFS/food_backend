import UsuarioModel from "../models/model.usuario.js";

class UsuarioController {

    static getAllUsuarios(req, res) {
        try {
            UsuarioModel.getAllUsuarios(function(err, result){
                if (err) {
                    console.error(err);
                    return res.status(500).json( {error: "Algo de errado não está certo ao buscar os usuarios."} );
                }

                if (!result[0]) {
                    return res.status(404).json( { erro: "Nenhum usuário foi encontrado." } );
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

export default UsuarioController;