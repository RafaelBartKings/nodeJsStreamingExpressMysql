const fs = require('fs');
const path = require('path')
 
module.exports = (way, nomeDoArquivo, callbackImagemCriada) => 
{
    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(way)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

    if(tipoEhValido) {
        const novoWay = `./assets/imagens/${nomeDoArquivo}${tipo}`

        fs.createReadStream(way)
            .pipe(fs.createWriteStream(novoWay))
            .on('finish', () => callbackImagemCriada(false, novoWay))

    } else {
        const erro = 'Tipo é inválido'
        console.log('ERRO! Tipo inválido')
        callbackImagemCriada(erro)

    }   
}



