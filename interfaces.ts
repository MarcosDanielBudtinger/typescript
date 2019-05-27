interface ProdutoInterface{
    nameProduct: string;
    priceProduct: number;
    categoryProduct: string;
}

function showProduct(prod: ProdutoInterface){
    console.log(prod.nameProduct);
    console.log(prod.priceProduct);
    console.log(prod.categoryProduct);
}

showProduct({nameProduct: 'Shoes', priceProduct: 190, categoryProduct: 'Running'});

function mostrar(prod: {category: String, product: String}){
    console.log(prod.category);
    console.log(prod.product);
}

function show({category, product}: {category: String, product: String}){
    console.log(category);
    console.log(product);
}

let obj = {category: 'Categoria', product: 'Produto'};

mostrar(obj);

class ProdutoTeste implements ProdutoInterface {
    nameProduct: string;
    priceProduct: number;
    categoryProduct: string;
}

let primeiroProduto = new ProdutoTeste();
primeiroProduto.nameProduct = 'First Product';
primeiroProduto.priceProduct = 245.00;
primeiroProduto.categoryProduct = 'Category Test';


console.log(`NAME: ${primeiroProduto.nameProduct} PRICE: ${primeiroProduto.priceProduct}`);