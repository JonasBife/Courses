const valores = [7.7, 8, 4.2, 6.54];

console.log(valores);
console.log(valores[0],valores[3]);
console.log(valores[0],valores[4]); //Índice 4 não existe, porém em javascript ele diz indefinido, então da liberdade mas é preciso ter cuidado

valores[4]=14

console.log(valores[4]);

valores[10]= 'olhai bixo';

console.log(valores);
console.log(valores.length);

console.log(valores.pop()); //É utilizado para excluir o último valor do array
delete valores[0];

console.log(typeof valores)
console.log(valores); //É utilizado para excluir o o valor da posição definida

console.log(typeof valores);