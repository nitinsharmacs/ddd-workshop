class Customer {
  constructor(id, name, address, accounts) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.accounts = accounts || [];
  }

  updateAddress(address) {
    this.address = address;
    this.accounts.forEach((account) => account.updateAddress(address));
  }
}

module.exports = Customer;
