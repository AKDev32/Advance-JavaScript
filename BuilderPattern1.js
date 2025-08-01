class Product {
  constructor(builder) {
    this.name = builder.name;
    if (builder.price > 0 && typeof builder.price === "number") {
      this.price = builder.price;
    } else {
      return {};
    }
    this.category = builder.category;
    this.description = builder.description;
    this.rating = builder.rating;
  }

  get price() {
    return this.price;
  }

  set price(p) {
    if (p > 0) {
      this.price = p;
    } else {
      console.log("Invalid price. Price must be greater than 0.");
    }
  }
}

const p = new Product({
  name: "Iphone",
  price: "150000",
  category: "Electronics",
  description: "Latest model",
  rating: 4.5,
});

console.log(p);
