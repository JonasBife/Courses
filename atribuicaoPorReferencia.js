/*Atribuição por referência acontece com objetos, pois quando definimos um objeto em uma constante
nós estamos passando para ela na verdade o endereço de memória onde as informações estão guardadas
e no caso de igualarmos duas constantes, qualquer alteração de conteúdo feita a uma será também
feita a outra, porque passamos o endereço ao objeto e não o conteúdo de fato*/
const a = {name: "eduardo"};
console.log(a);

var b = {name: "leite"};
console.log(b);

b=a;
b.name="Ixi, ferrou";

console.log(a);
console.log(b);

//Se fizer a mesma coisa mas usando tipos primitivos, como number ou char, aí atribui o valor e não a referência
let c=1;
let d=c;

d++;

console.log(c);
console.log(d);