class Product {
  #name;
  #price;
  category;
  description;
  rating;

  constructor(
    productName,
    productPrice,
    productCategory,
    productDescription,
    productRating
  ) {
    this.#name = productName;
    if (productPrice > 0 && typeof productPrice === "number") {
      this.#price = productPrice;
    }
    this.category = productCategory;
    this.description = productDescription;
    this.rating = productRating;
  }
  getPricce() {
    return this.#price;
  }

  setPrice(p) {
    if (p > 0) {
      this.#price = p;
    } else {
      console.log("Invalid price. Price must be greater than 0.");
    }
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    if (name && typeof name === "string") {
      this.#name = name;
    } else {
      console.log("Invalid name. Name must be a non-empty string.");
    }
  }
}
let iphone = new Product();
iphone.setPrice(150000);
iphone.setName("iPhone 14");
