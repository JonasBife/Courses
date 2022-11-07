//Armazenando uma função em uma variável
const imprimirSoma = function (a,b){ //Estou declarando assim uma função anônima, ou seja, função sem nome dentro da constante
    console.log(a+b)
};

imprimirSoma(2,3);

//Posso reduzir a sintaxe com uma função arrow, que seria como uma substituição da palavra function
const soma = (a,b) => {
    return a + b
};
console.log(soma(5,13));

/*E quando não declaramos a chave associada a função arrow o javascript, ele implicitamente entende que teremos
um return associado a uma função de 1 linha*/
const subtracao = (a,b) => a - b;
console.log(subtracao(4,5));

//função super reduzida com 1 único parâmetro não precisamos nem declarar os parênteses
const sper = a => a*365;
console.log(sper(1));