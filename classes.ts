class Animal {

    /**
     * Attributes
     */
    name: string;
    color: string;

    //Constructor with more one parameter
    constructor(name: string, color: string){
        this.name = name;
        this.color = color;
    }
}

let myAnimal: Animal = new Animal('Elephant', 'White');


console.log(myAnimal.name);
console.log(myAnimal.color);