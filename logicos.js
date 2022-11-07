function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //Comparador logico ou
    const comprarTv50 = trabalho1 && trabalho2 //comparador lógico E
    const comprarTv32 = trabalho1 != trabalho2 //Diferente, ou seja, se qualquer um for verdadeiro
    const manterSaudavel = !comprarSorvete //operador unário (Se var for falsa)

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //Crio objeto para poder retornar mais de 1 var
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));

