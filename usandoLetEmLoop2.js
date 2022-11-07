const funcs = []; //Declarando um array em branco

for (let i = 0; i < 10; i++){
    funcs.push(function(){ //Declarando uma funçaõ anônima
        console.log(i)
    })
};

funcs[2]()
funcs[8]()

//Como i é definido por let e tem função de bloco ele vai ter memória do momento que foi criada a função

//função é um closure, ela tem consciência do local que ela foi criada