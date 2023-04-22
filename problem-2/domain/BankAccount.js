class BankAccount {
  constructor(accountNumber, address) {
    this.accountNumber = accountNumber;
    this.address = address;
  }

  updateAddress(address) {
    this.address = address;
  }
}

module.exports = BankAccount;
