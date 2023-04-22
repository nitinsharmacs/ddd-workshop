const Cart = require('./domain/Cart.js');
const Product = require('./domain/Product.js');
const DiscountService = require('./domain/service/DiscountService.js');
const OrderService = require('./domain/service/OrderService.js');
const Weight = require('./domain/Weight.js');

const print = (...args) => {
  const [heading, content] = args;
  console.log(heading, JSON.stringify(content));
};

const main = () => {
  const cart = new Cart('cart-1');
  const discountService = new DiscountService();
  const orderService = new OrderService();

  const productName1 = 'Apple pencile';
  cart.add(
    new Product(
      productName1,
      discountService.discountPrice(productName1),
      new Weight(100)
    ),
    2
  );

  const productName2 = 'Sony Wireless Headphone';
  cart.add(
    new Product(
      productName2,
      discountService.discountPrice(productName2),
      new Weight(200)
    )
  );

  const order = orderService.checkout(cart);
  const totalCost = orderService.totalCost(order);

  print('Order total cost', totalCost);
};

main();
