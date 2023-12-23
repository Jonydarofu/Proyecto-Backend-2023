class ProductManager {
  constructor() {
    this.products = [];
  }
  getProducts() {
    return this.products;
  }
  addProduct(products){
    if( !products.title ||
        !products.description ||
        !products.price ||
        !products.code ||
        !products.imagen ||
        !products.stock)

    { return 'Completar Campos'}
const result = this.products.find( (prod) => prod === products.code )
  if (products)
  return "El producto ya existe"
}
    if (this.products.length === 0){
    products.id = 1
    this.products.push ( products )}
else{
        products.id = this.products.length + 1
    this.products.push ( products )
   
    return ' producto agregado '
}
getProductsByld (pid){
  const result = this.products.find ( products === pid)
  if (!result)
  {return ' no existe el producto '}
  return result 
}
}
const products = new ProductManager()
console.log(products.getProducts())
console.log(products.addProduct({title: 'producto uno', description:'bicicleta Venzo', price:'500000', imagen: 'imagen', stock: '20', code: 'abc123'}))