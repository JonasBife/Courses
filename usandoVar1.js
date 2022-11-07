{
    {
        {
            { 
                //Apesar de estar dentro do bloco, a variável sera estará visível em todo código
                var sera = "Será???"
            }
        }
    }
}
console.log(sera);

//O local onde a variável é definida é chamada de escopo

//agora, se a variável for definida dentro da função, ou seja '{' com um escopo definido, ela só estará visível internamente
function teste () {
    var local = 123;
    console.log(local)
};

teste()
//console.log(local) //Isso irá apresentar erro

/*Quando falamos de var e principalmente no browser é preciso tomar muito cuidado, 
No browser existe um objeto Global chamado 'window', onde tudo que for declarado estará lá dentro
por isso sempre que for trabalhar com var é preferível que seja declarado localmente dentro de uma function*/

