const Order = require('../Order.js');

class OrderService {
  checkout(cart) {
    const items = cart.getItems();
    const products = items.reduce((acc, item) => {
      const productsList = new Array(item.quantity).fill(item.product);
      return [...acc, ...productsList];
    }, []);
    cart.markCheckout();
    return new Order(products);
  }
}

module.exports = OrderService;
