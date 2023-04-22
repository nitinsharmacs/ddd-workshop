const Address = require('./domain/Address');
const BankAccount = require('./domain/BankAccount');
const Customer = require('./domain/Customer');

const print = (...args) => {
  const [heading, content] = args;
  console.log(heading, JSON.stringify(content));
};

const main = () => {
  const address = new Address('NW');
  const bankAccount = new BankAccount('acc-1', address);
  const accounts = [bankAccount];
  const customer = new Customer('customer-1', 'Peter', address, accounts);

  print('CUSTOMER', customer);

  const newAddress = new Address('Delhi');
  customer.updateAddress(newAddress);

  print('CUSTOMER AFTER UPDATE', customer);
};

main();
