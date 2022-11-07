//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
};

imprimirSoma(2,3);

imprimirSoma(2); //Vai tentar somar a com Undefined, aí o resultado é NaN (Not A Number)

imprimirSoma(2,3,4); //Ele ignora o valor extra

//Função com retorno

function soma(a, b=0) { //Ele vai colocar como padrão o 0
    return a + b        //Vai retornar o resultado, não vai mostrar em tela porque isso não está tratado na função
};

console.log(soma(2,5));
console.log(soma(2));
