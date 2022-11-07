// novo recurso do Eckon Script 2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

/**Agora, esta operacao destructuring é utilizada para "globalizar" objetos/arrays internos de funções
 * fazendo com que se tornem variáveis fora daquele obj/array
 */

const {nome, idade} = pessoa; //Ou seja, do objeto pessoa eu extraio as infos nome e idade
console.log(nome, idade);

const{nome: n, idade: i} = pessoa; //Assim além de extrair eu estou atribuindo outros nomes às informações
console.log(n, i);

const {sobrenome, bemHumorada = true} = pessoa; //Aqui além de tentar chamar uma info que não existe,
                                                //estou passando um valor padrão para a outra caso esteja em branco
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep}} = pessoa; //assim extraio uma info de um sub objeto
console.log(logradouro, numero, cep);
