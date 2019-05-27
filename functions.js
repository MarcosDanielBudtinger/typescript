var soma = function (x, y) {
    return x + y;
};
var num = soma(3, 5);
console.log(num);
var somaComArrowFunction = function (x, y) { return x + y; };
var num2 = somaComArrowFunction(3, 8);
console.log(num2);
/**
 * let funcao = (parametros): tipoRetorno => {
 *
 * };
 *
 *
 * let funcao = () => {
 * };
 *
 */
var funcaoDefaultParameters = function (first_name, last_name) {
    if (last_name === void 0) { last_name = 'Daniel'; }
    return first_name + " " + last_name;
};
console.log(funcaoDefaultParameters('Marcos'));
var funcaoOptionalParameters = function (first_name, last_name) {
    if (last_name == undefined) {
        return "" + first_name;
    }
    else {
        return first_name + " " + last_name;
    }
};
console.log(funcaoOptionalParameters('Marcos'));
console.log(funcaoOptionalParameters('Marcos', 'Budtinger'));
