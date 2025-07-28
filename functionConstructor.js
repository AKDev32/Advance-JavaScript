function Product(n, p, d) {
  this.name = n;
  this.price = p;
  this.description = d;

  this.displayProduct = function () {
    console.log(
      "Name:",
      this.name,
      "Price:",
      this.price,
      "Description:",
      this.description
    );
  };
}

let a = new Product("macbook", 125000, "Latest model");
a.displayProduct();
