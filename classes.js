var Animal = /** @class */ (function () {
    //Constructor with more one parameter
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }
    return Animal;
}());
var myAnimal = new Animal('Elephant', 'White');
console.log(myAnimal.name);
console.log(myAnimal.color);
