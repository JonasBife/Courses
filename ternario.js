//primeira parte do operador ternãrio é uma operação relacional, após o resultado se true e o else
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';
//É como se fosse um if then else

//E assim usando uma função arrow simplificada combinada com o operador ternário fica reduzido o código apesar de mais complicado de ler

console.log(resultado(8));
console.log(resultado(4.8));