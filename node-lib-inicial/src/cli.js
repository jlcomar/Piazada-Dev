import pegaArquivo from "./index.js";
import fs from 'fs';
import chalk from "chalk";
import listaValidada from "./http-validacao.js";

const caminho = process.argv;

async function imprimeLista(valida, resultado, identificador = '') {

    if(valida) {
        console.log(
            chalk.blueBright('Lista validada'),
            chalk.black.bgBlueBright(identificador),
            await listaValidada(resultado));
    } else {
        
        console.log(
            chalk.blueBright('Lista de links'),
            chalk.black.bgBlueBright(identificador),
            resultado);
    }
    }
    

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if(erro.code === 'ENOENT') {
            console.log(chalk.redBright('Arquivo ou Diretório não existe'));
            return
        }
    }

    if(fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho);
        imprimeLista(valida, resultado)
    } else if(fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async(nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`) 
            imprimeLista(valida, lista, nomeDeArquivo)
        });
    }
}

processaTexto(caminho);