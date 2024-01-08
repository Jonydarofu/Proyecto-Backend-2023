class ProductManager {
  constructor() {
    this.product = [];
  }
  getProducts() {
    return this.product;
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
      return "Completar Campos";
    }
    const result = this.product.find((prod) => prod === product.code);
    if (product) {
      return "El producto existe";
    }
    if (this.products.length === 0) {
      product.id = 1;
      this.product.push(product);
    } else {
      product.id = this.product.length + 1;
      this.product.push(product);
    }
    return " producto agregado ";
  }
  getProductsByld(pid) {
    const result = this.product.find(product === pid);
    if (!result) {
      return " no existe el producto ";
    }
    return result;
  }
}
const product = new ProductManager();
console.log(product.getProducts());
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
