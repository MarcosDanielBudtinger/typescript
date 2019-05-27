interface AnimalInterface{
    name: string;
    color: string;
    run();
    walk();
}

class Animal implements AnimalInterface {
    constructor(public name: string, public color: string){
    }

    run(){
        console.log('Running');
    }

    walk(){
        console.log('Walking');
    }
}

class Coelho extends Animal{
    tamanhoOrelha : number;

    walk(){
        super.walk();
        console.log('Rabbit Walking');
    }
}

let coelho: Coelho = new Coelho('Coelho', 'Branca');

console.log(coelho.name);
console.log(coelho.color);
coelho.run();
coelho.walk();