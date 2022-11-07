/*Hoisting é o içamento, ou seja, quando declaramos uma operação com uma variável declarada por var 
após o ponto que ela será utilizada, ele interpreta como se ela já existisse porém sem valor e não da erro*/
console.log('a =',a);
var a = 2;
console.log('a =',a);

//que é o equivalente para o código do que declarar
/* 
* var a;
* console.log('a =',a);
* a = 2;
* console.log('a =',a);
*/

//Fazendo o mesmo com let ele da erro e não hoisting
console.log('b =',b);
let b = 2;
console.log('b =',b);
