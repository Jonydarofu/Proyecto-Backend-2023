class ProductManager {
  constructor() {
    this.products = [];
  }
  getProducts() {
    return this.products;
  }
  addProduct(products){
    if( products.tittle ||
        products.description ||
        products.price ||
        products.code ||
        products.imagen ||
        products.stock ||        

    )
    { return 'Completar Campos'}
const products = this.products.find( prod )
  if (products)
  return "El producto ya existe"
}
}
