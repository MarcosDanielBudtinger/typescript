/**
 let myArray: Array<number> = [];


function funcao (array: Array<number>){

}

function funcao (array: Array<number>){

}
*
 */
function funcao(param) {
    return param;
}
var variable = funcao('2');
var variable2 = funcao(2);
var variable3 = funcao(2);
var Lista = /** @class */ (function () {
    function Lista() {
        this.items = [];
    }
    Lista.prototype.add = function (item) {
    };
    Lista.prototype.remove = function (item) {
    };
    return Lista;
}());
var lista = new Lista();
//obriga a passar number
lista.add(1);
lista.remove(2);
