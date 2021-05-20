const conexao = require('../infraestrutura/database/conexao');
const uploadfile = require('../infraestrutura/arquivos/uploadfile');

class Pet{
    add(pet, res) {
        const query = 'INSERT INTO Pets SET ?'

        uploadfile(pet.imagem, pet.nome, (erro, novoWay) => {
            if(erro) {
                res.status(400).json({ erro })  
            } else {
                const novoPet = {nome: pet.nome, imagem: novoWay}

                conexao.query(query, pet, erro => {
                    if(erro) {
                        console.log(erro);
                        res.status(400).json(erro);
                    } else {
                        res.status(200).json(novoPet);
        
                    }
                }) 
            }             
        }) 
    }
}

module.exports = new Pet()
