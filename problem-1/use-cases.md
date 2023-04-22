Problem statement:
Adding an apple pencile to a Cart

- Note:
  Please do not create User class.
  Please do not create ProductCategory, Variant, Colour, etc classes.
- UseCase 2:

Add a “Sony Wireless headphone” to a Cart

UseCase 3:

Add 2 quantity of “Apple Pencil” to a Cart.

Use Case 4:
Use Case #4: Remove already added Item “Apple Pencil” (with its all quantities) from Cart.

## Use Case #5: As a business User, I would like to know which Products (Product’s names) were removed from Cart.

Note: Please do not create business User class. You could have a method on Cart class or some other class,

Problem #6: As a business User, I would like to differentiate between two Carts, even if they contain same Item (both carts have Product “Sony Wireless headphone” with 1 quantity) --
Note – Two carts where items are same, equality on Carts should return false
Cart cart1 = Cart();
Cart cart2 = Cart();
Item item1 = new Item(new Product(”Sony Wireless headphone"), 1);
Item item2 = new Item(new Product(”Sony Wireless headphone"), 1);
cart1.add(item1);
cart2.add(item2);
cart1.equals(cart2) => should return false

Problem#7:Add Price to a Product. We need support for only one currency, say - USD.
Note: For modelling currency - Please use java.util.Currency (Currency.getInstance("USD")) or what your programming language provides, if none just use String for now.
new Product("Apple Pencil", new Price(...));

Problem #8 - As a Business User I would like to price my product 10% below competitor price (competitor price is available for product) .
Assume that HashMap of Competitor Product Name and price is available. Competitor name matches 1 to 1 with our Product Name
new Product( "name", Price(discountedPrice, "USD")) new Product( "name", Price(10.00, "USD"))

Problem #9 Create Order( with Products) when Cart is checked out. Also Mark cart as checked out.
While Creating Order please do not use Item class but use Product class. Flatten out products in Item.

Order order = new Order( List<Product> products)

Code Problem 11:

Calculate Total cost for the Order.
Calculate shipping cost using weight of the Product.
Total cost = cost of all products in order + (weightIngrams of each product \*0.1)
