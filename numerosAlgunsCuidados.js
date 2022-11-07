//Aqui o resultado é o tipo Infinity, ou seja, em Javascript ele não da erro essa divisão
console.log(7/0)

//Da para fazer operações com string como se fossem números
console.log("10"/3)

//Mas em alguns casos da problema, como no caso do + que é utilizado na concatenação
console.log("9"+4); //Resultado será 94 e não 13

//Pela maneira de otimização em alguns cálculos de ponto flutuante o resultado não é exato
console.log(0.1 + 0.7)

/*  Em algumas transformações não é possível utilizar o valor literal, 
*   para isso colocamos ele dentro de parênteses
*/
console.log((10.355).toString())
