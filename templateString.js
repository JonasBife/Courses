const nome = 'Mozão';
const concatenacao = 'Olá ' + nome + '!'; /*Assim faria com string mas isso poderia 
                                            causar alguns problemas aou ter mais váriaveis*/
console.log(concatenacao); 

//Ao usar o template string ele considera os espaços e demais informações, USAR CRASE ``
const template = `
O
l
á
${nome}!`;  //Usar o ${} para que o código consiga interpretar, 
            //lendo o conteúdo da variável na hora que for utilizar

console.log(concatenacao, template);

//dentro do tamplate string posso também chamar funções

const up = texto => texto.toUpperCase(); /*Função arrow, onde crio uma função atribuindo ao conteúdo genérico
                                        de up uma função de transformar todas as letras em maiúsculo*/
console.log(`Ei... ${up('cuidado')}`);
