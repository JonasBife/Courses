/*uma coisa importante tanto nos objetos quanto arrays é, ao usar {} ou [] no lado direito eu estou criando,
* no lado esquerdo estou usando o operador destructuring,
* o que representa uma criação mais rapida de multiplas variáveis, reduzindo meu código*/

const [a] = [10];
console.log(a);

const [n1, ,n3 , ,n5 ,n6 = 0] = [10, 7, 9, 10];
console.log(n1, n3, n5, n6);