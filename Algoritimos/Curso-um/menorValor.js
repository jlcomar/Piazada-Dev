const livros = require('./listaLivros')

function menorValor(arrProdutos, posicaoInicial) {
    
    let maisBarato = posicaoInicial;
    
    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual
        }
    }

    return maisBarato;
}

module.exports = menorValor;

// 0011101001010001 -> binario

// binario para hexadecimal

// 0011 1010 0101 1111
//  3    C    5     F

// hexadecimal -> 3C5F

// hexadecimal -> binario = fazer ao contrario

//  3    C    5     F
// 0011 1010 0101 1111