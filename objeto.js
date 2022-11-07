const prod1 = {}; //Con chaves cria um objeto
prod1.nome = 'Celular ultra mega'; //Criando de forma dinâmica um identificador chamado nome dentro do objeto 
prod1.preco = 4998.60;
prod1['Desconto Legal'] = 0.4; //Evitar atributos com espaços no nome

console.log(prod1);

const prod2 = { //Outra forma de declarar objetos explicitamente
    nome: 'Camisa Polo',
    preco: 76.40
}

console.log(prod2);

const prod3 = { //É possível ter objetos aninhados
    nome: 'Camisa Polo',
    preco: 76.40,
    obj: {
        blabla: 1,
        jus: 'Teste',
        obj: 'Outro obj, dentro de um objeto os nomes são únicos, mas num aninhado pode ter outro com mesmo nome'
    }
}
console.log(prod3);
console.log(typeof prod3);

console.log(prod3.obj);
console.log(prod3.obj.obj);

//json é um formato textual de objeto, mas NÃO é a mesma coisa, acima tivemos a declaração literal de objeto
//json serve para intercomunicalidade entre sistemas
