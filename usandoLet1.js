/*Let ele sempre tem escopo de bloco, portanto vai resolver o escopo mais específico possível,
* caso não exista ele procura no escopo seguinte, mais abrangente
*/

var numero =1;
{
    let numero = 2;
    console.log("Dentro =",numero);
}
console.log("Fora =",numero);

