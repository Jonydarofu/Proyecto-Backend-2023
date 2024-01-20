class ProductManager {
  constructor() {
    this.product = [];
  }
  getProducts() {
    return this.products;
  }
  addProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.code ||
      !product.imagen ||
      !product.stock
    ) {
      return "Completar campos del producto";
    }
    const result = this.product.find(prod => prod.code === product.code);
    if (result) {
      return "El producto existe";
    }
    if (this.products.length === 0) {
      product.id = 1;
      this.product.push(product);
    } else {
      product.id = this.products.length + 1;
      this.products.push(product);
    }
    return " producto agregado ";
  }
  getProductsByld(pid) {
    const result = this.product.find(prod => prod.id === pid);
    if (!result) {
      return " no existe el producto ";
    }
    return result;
  }
}
const product = new ProductManager();
console.log(
  product.addProduct({
    title: "producto uno",
    description: "bicicleta Venzo",
    price: "500000",
    imagen: "imagen",
    stock: "20",
    code: "abc123",
  })
);
//console.log(products.getProducts());
console.log (products.getProductsByld(1));
