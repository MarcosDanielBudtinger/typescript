//booleano
//let success = true; 
//or
let sucess: boolean = true;
//number
let valor = 10.5;
let valor2: number = 10;

//string

let myName: string = 'Marcos Daniel';
let myLastName: string = 'Budtinger';

let apresentation = `Hello ${myName} ${myLastName}`;
console.log(apresentation);

//array
let arrayStrings: string[] = ["a", "b", "c"];

let array: Array<string> = ["a", "b", "c"];

let arrayNumber: Array<number> = [1,2,3,4,5,6,7,8,9,10];

//Enum

enum sexo {MASCULINO, FEMININO};

let sexoDefinido: sexo = sexo.MASCULINO;

if(sexoDefinido == sexo.MASCULINO){
    console.log('MASCULINO');
}else{
    console.log('FEMININO');
}
