function rand([min = 0, max = 1000]) {
    if (min>max) [min, max] = [max, min];   //Ou seja, estou desestruturando para corrigir valores caso haja uma passagem
                                            //errada de parâmetros, uma vez que no array eu não passo o nome do parametro
                                            //na hora de informá-lo
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([,10]));
console.log(rand([]));