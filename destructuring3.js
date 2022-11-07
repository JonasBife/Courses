// tomar cuidado que dependendo onde eu uso o {} ou [] posso estar ou usando destructuring ou definindo objetos e arrays
function rand({min = 0, max=1000}) {    /* Aqui, além de estar definindo a função rand, estou desestruturando as infos
                                        *min e max, ou seja, estarão disponíveis globalmente e além disso estou
                                        *passando valores padrão para elas caso não informe */
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
};

//Como está dentro de um objeto a atribuição se dá por : e não por =
console.log(rand({max: 50, min: 40}));

//aqui as 2 linhas abaixo são equivalentes ao código acima
const obj = {max: 50, min: 40};
console.log(rand(obj));

console.log(rand({min:955})); //posso declarar apenas 1 parâmetro, dado que o outro usará o padrão
console.log(rand({})); //ou não declarar nenhum