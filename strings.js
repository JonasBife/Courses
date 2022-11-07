const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.indexOf('r'));

console.log(escola.substring(0,3));
console.log('Escola '.concat(escola).concat("!"));
console.log('Escola '+escola+("!"));


console.log(escola.replace(3,'e'));
/* regex (/.../) pode ser utilizada para substituir todas as variáveis de um certo tipo de dentro do array*/
console.log(escola.replace(/\w/,'e'));
console.log(escola.replace(/\d/,'e'));
console.log(escola.replace(/\w/g,'e'));

console.log('Ana,Maria,Pedro'.split(','));
