Problem #10 - Customer and Bank Account
When Customer’s Address is updated, update her all Bank Accounts address as well.
(example of invariant or business rules or consistency rules)

Customer is Entity
Account Is Entity
Customer has List of bank accounts
Customer has Address
Account has Address
Address has one attribute called City
Address is Value Object
---- customer.updateAddress(address)
