console.log(typeof console);

const obj1 = {};
//São duas formas equivalentes de criar um tributo ao objeto
obj1.nome = 'Bola';
obj1['nome'] = 'Bola2';

console.log(obj1.nome);

function Obj(nome){
    this.nome = nome        //this é utilizado para deixar pública a delacração, ou seja, 
    this.exec = function(){ //nome vai existir globalmente, não apenas dentro da função
        console.log('Exec...')
    }
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec();