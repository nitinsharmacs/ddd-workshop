class Cart {
  constructor(id) {
    this.id = id;
    this.items = [];
    this.removedItems = [];
    this.checkoutStatus = false;
  }

  add(product, quantity = 1) {
    return this.items.push({ product, quantity });
  }

  remove(productName) {
    const product = this.items.find(
      ({ product }) => product.name === productName
    );

    this.removedItems.push(product);

    this.items = this.items.filter(
      ({ product }) => product.name !== productName
    );
  }

  getItems() {
    return [...this.items];
  }

  getRemovedItems() {
    return [...this.removedItems];
  }

  equals(cart) {
    return this.id === cart.id;
  }

  markCheckout() {
    this.checkoutStatus = true;
  }
}

module.exports = Cart;
