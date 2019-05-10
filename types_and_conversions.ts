let msg: any = 'new message';

let count = (<string>msg).length;

let count2 = (msg as string).length;

let obj = {
    name : 'Marcos Daniel'
};

(<any>obj).texto = 'lets go';
//(obj as any).texto = 'lets go';
console.log(obj);

let numero = 2;

let numString = numero + "";

console.log(typeof numString);