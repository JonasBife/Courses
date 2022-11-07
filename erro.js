function tratarErroELancar(erro) {
    throw "mensagem de erro ao usuário" //Throw é a mensagem a ser enviada ao usuário
    //Da para criar um objeto aqui com diversos parâmetros caso queira
    /**throw {
    *nome: erro.name,
    *msg: erro.message,
    *date: new Date
  } */
}

function imprimirNomeGritado(obj) {
    try {   //Colocar aqui dentro códigos que imagino poderem ter erro, de forma a poder tratar
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {   //Aqui é o tratamento que será dado
        tratarErroELancar(e)
    } finally {     //Finally é opcional ao finalizar
        console.log('mensagem para apresentar ao final do programa independente de erro ou não')
    }
}

const obj = {nome: 'Roberto'};
imprimirNomeGritado(obj);

//O erro foi criar a fun~ção com 'name' e depois declarar com 'nome'