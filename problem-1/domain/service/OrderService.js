const Order = require('../Order.js');

class OrderService {
  static SHIPPING_COST_FACTOR = 0.1;

  checkout(cart) {
    const items = cart.getItems();
    const products = items.reduce((acc, item) => {
      const productsList = new Array(item.quantity).fill(item.product);
      return [...acc, ...productsList];
    }, []);
    cart.markCheckout();
    return new Order(products);
  }

  totalCost(order) {
    return order.totalCost(OrderService.SHIPPING_COST_FACTOR);
  }
}

module.exports = OrderService;
