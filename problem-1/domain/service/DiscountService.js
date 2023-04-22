const Curreny = require('../Curreny');
const Price = require('../Price');

module.exports = class DiscountService {
  static competitorsProducts = {
    'Apple pencile': 100,
    'Sony Wireless Headphone': 200,
  };

  discountPrice(productName) {
    const amount = DiscountService.competitorsProducts[productName] * 0.1;
    return new Price(amount, Curreny.USD);
  }
};
