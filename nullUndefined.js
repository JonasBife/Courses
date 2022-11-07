let valor; //Variável não inicializada, mas declarada
console.log(valor);

/*console.log(valor2);*/ //Variável não inicializada, e NEM mas declarada, aí da erro

valor3 = null; //Ausência de valor, ou seja, não aponta para valores e nem locais de memória, é uma boa forma de zerar variável objeto
console.log(valor3);

const produto = {};
console.log(produto.preco); /**produto está declarado porém o preço não está definido sendoatributo do objeto */

produto.preco = 3.5;
console.log(produto.preco);

produto.preco = undefined; //É possível definir atributos e varíáveis como undefined, mas EVITAR
console.log(!!produto.preco);
console.log(produto);

produto.preco=null; //sem preço

console.log(produto);
console.log(produto.preco);