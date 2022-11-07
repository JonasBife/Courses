let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);


//Há vários elementos que podem ser utilizados como verdadeiro ou falso, para testar nós usamos o símbolo !! ou !
//imediatamente anterior à informação que queremos testar, sendo !! oteste se é verdadeiro e ! falso o teste

isAtivo = 1;
console.log(!!isAtivo);

console.log('os verdadeiros...');
console.log(!!3); //Números inteiros diferentes de 0, positivos ou negativos
console.log(!!-1);
console.log(!!' '); //String com espaço ou coisas escritas é verdadeiro
console.log(!!'texto');
console.log(!![]); //Array estando vazio ou não
console.log(!!{}); //Objeto literal
console.log(!!Infinity);
console.log(!!(isAtivo = true)); //Se for um valor resolvível para verdadeiro, colocar entre parênteses

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...') //testes
console.log(!!('' || null || 0 || ' ')); /*Assim é feito um teste lógico, || ou, ou seja, se encontrar tal valor
                                        traz ele, se não ||, testa o próximo*/

let nome1 = '';
console.log(nome1 || 'Desconhecido');

let nome2 = 'Lucas';
console.log(nome2 || 'Desconhecido');