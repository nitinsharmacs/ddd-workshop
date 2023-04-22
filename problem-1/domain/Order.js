class Order {
  constructor(products) {
    this.products = products;
  }

  totalCost(shippingCostFactor) {
    return this.products.reduce((cost, product) => {
      return (
        cost + product.price.amount + product.weight.value * shippingCostFactor
      );
    }, 0);
  }
}

module.exports = Order;
