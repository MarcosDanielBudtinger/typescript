function showProduct(prod) {
    console.log(prod.nameProduct);
    console.log(prod.priceProduct);
    console.log(prod.categoryProduct);
}
showProduct({ nameProduct: 'Shoes', priceProduct: 190, categoryProduct: 'Running' });
function mostrar(prod) {
    console.log(prod.category);
    console.log(prod.product);
}
function show(_a) {
    var category = _a.category, product = _a.product;
    console.log(category);
    console.log(product);
}
var obj = { category: 'Categoria', product: 'Produto' };
mostrar(obj);
var ProdutoTeste = /** @class */ (function () {
    function ProdutoTeste() {
    }
    return ProdutoTeste;
}());
var primeiroProduto = new ProdutoTeste();
primeiroProduto.nameProduct = 'First Product';
primeiroProduto.priceProduct = 245.00;
primeiroProduto.categoryProduct = 'Category Test';
console.log("NAME: " + primeiroProduto.nameProduct + " PRICE: " + primeiroProduto.priceProduct);
