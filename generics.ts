/**
 let myArray: Array<number> = [];


function funcao (array: Array<number>){

}

function funcao (array: Array<number>){

}
* 
 */

 function funcao<T>(param: T): T{
     return param;
 }


let variable: string = funcao('2');
let variable2 = funcao(2);

let variable3: number = funcao<number>(2);

class Lista<T>{
    items: Array<T> = [];

    add(item: T){
    }

    remove(item: T){
    }
}

let lista = new Lista<number>();

//obriga a passar number
lista.add(1);

lista.remove(2);