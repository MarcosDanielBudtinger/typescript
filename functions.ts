
const soma = function(x: number, y: number): number{
    return x+y;
}

let num: number = soma(3,5);

console.log(num);

const somaComArrowFunction = (x: number, y: number): number => x + y;

let num2 = somaComArrowFunction(3,8);

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

 const funcaoDefaultParameters = (first_name, last_name = 'Daniel'): string => {
    return `${first_name} ${last_name}`;
 };

console.log(funcaoDefaultParameters('Marcos'));

const funcaoOptionalParameters = (first_name : string, last_name?: string) : string => {
    if(last_name == undefined){
        return `${first_name}`;
    }else{
        return `${first_name} ${last_name}`;
    }
}
console.log(funcaoOptionalParameters('Marcos'));
console.log(funcaoOptionalParameters('Marcos', 'Budtinger'));