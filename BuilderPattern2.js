class Product {
  #name;
  #price;
  #description;

  constructor(builder) {
    this.#name = builder.name;
    if (builder.price > 0 && typeof builder.price === "number") {
      this.#price = builder.price;
    } else {
      return {};
    }
    this.#description = builder.description;
  }

  get price() {
    return this.price;
  }

  set price(p) {
    if (p > 0) {
      this.#price = builder.price;
    } else {
      console.log("Invalid price. Price must be greater than 0.");
    }
  }

  displayProduct() {
    console.log(
      "Product displayed",
      this.#name,
      this.#price,
      this.#description
    );
  }

  static get builder() {
    class Builder {
      constructor() {
        this.name = "";
        this.price = 0;
        this.description = "";
      }

      setName(incomingName) {
        this.name = incomingName;
        return this;
      }

      setPrice(incomingPrice) {
        this.price = incomingPrice;
        return this;
      }

      setDescription(incomingDescription) {
        this.description = incomingDescription;
        return this;
      }

      build() {
        return new Product(this);
      }
    }
    return Builder;
  }
}

const p = new Product.builder()
  .setName("Iphone")
  .setPrice(150000)
  .setDescription("Latest model")
  .build();

p.displayProduct();
