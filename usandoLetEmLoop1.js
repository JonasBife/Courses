for (let i=0; i<10; i++) {
    console.log(i);
}

//ou seja, abaixo dará erro, pois o let ele tem sempre contexto de bloco, logo i não existirá
console.log("i =",i);