const funcs = []; //Declarando um array em branco

for (var i = 0; i < 10; i++){
    funcs.push(function(){ //Declarando uma funçaõ anônima
        console.log(i)
    })
};

funcs[2]()
funcs[8]()

//Esse é um problema tradicional do javascript no uso de var dentro de loops pois não respeita a declaração de i