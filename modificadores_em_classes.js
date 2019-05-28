var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnimalSelvagem = /** @class */ (function () {
    function AnimalSelvagem(name, color) {
        this.name = name;
        this.color = color;
    }
    AnimalSelvagem.prototype.correr = function () {
        this.som = 'zummmmm';
        console.log(this.som);
    };
    AnimalSelvagem.prototype.andar = function () {
    };
    AnimalSelvagem.prototype.comer = function () {
    };
    return AnimalSelvagem;
}());
var CoelhoSelvagem = /** @class */ (function (_super) {
    __extends(CoelhoSelvagem, _super);
    function CoelhoSelvagem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoelhoSelvagem.prototype.correr = function () {
        _super.prototype.correr.call(this);
    };
    return CoelhoSelvagem;
}(AnimalSelvagem));
var coelhoSelvagem = new CoelhoSelvagem('Coelho Selvagem', 'Cinza');
coelhoSelvagem.correr();
