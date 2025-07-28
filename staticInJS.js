class Product {
  static x = 10;

  constructor(name, price) {
    this.name = name;
    this.price = price;
    console.log(Product.x);
  }
}

let p1 = new Product("Iphone", 150000);
Product.x = 20;
console.log(Product.x);
