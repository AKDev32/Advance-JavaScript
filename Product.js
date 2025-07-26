class Product {
  name;
  price;
  category;
  description;
  rating;

  constructor(name, price, category, description, rating) {
    this.name = name || "Default Product";
    this.price = price || 0;
    this.category = category || "General";
    this.description = description || "No description available";
    this.rating = rating || 0;
  }

  addToCart() {
    console.log("Product added to cart");
  }

  removeFromCart() {
    console.log("Product remove from cart");
  }

  displayProduct() {
    console.log("Product displayed");
  }

  buyProduct() {
    console.log("Product purchased");
  }
}

let iphone = new Product();
iphone.name = "iPhone 14";
iphone.price = 150000;
iphone.category = "Electronics";
iphone.description = "Latest Apple iPhone with advanced features";
iphone.rating = 4.5;
console.log(iphone.name);
console.log(iphone.price);
console.log(iphone.category);
console.log(iphone.description);
console.log(iphone.rating);

iphone.addToCart();
iphone.displayProduct();
iphone.buyProduct();
iphone.removeFromCart();
