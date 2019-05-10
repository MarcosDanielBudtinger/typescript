//booleano
//let success = true; 
//or
var sucess = true;
//number
var valor = 10.5;
var valor2 = 10;
//string
var myName = 'Marcos Daniel';
var myLastName = 'Budtinger';
var apresentation = "Hello " + myName + " " + myLastName;
console.log(apresentation);
//array
var arrayStrings = ["a", "b", "c"];
var array = ["a", "b", "c"];
var arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Enum
var sexo;
(function (sexo) {
    sexo[sexo["MASCULINO"] = 0] = "MASCULINO";
    sexo[sexo["FEMININO"] = 1] = "FEMININO";
})(sexo || (sexo = {}));
;
var sexoDefinido = sexo.MASCULINO;
if (sexoDefinido == sexo.MASCULINO) {
    console.log('MASCULINO');
}
else {
    console.log('FEMININO');
}
