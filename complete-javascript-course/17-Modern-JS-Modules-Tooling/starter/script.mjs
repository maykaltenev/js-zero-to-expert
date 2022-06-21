// Importing module
// console.log("Importing module");
// console.log(addToCart('bread', 5))
// console.log(price, tq)
// import { addToCart, price, totalQuantity as tq } from "./shoppingCart.js";

import * as ShoppingCart from './shoppingCart.mjs'

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice)

// we are not missing usually names when exporting default but its possible to be done
//  import add, { addToCart, price, totalQuantity as tq } from './shoppingCart.js'
// add('pasta', 5)


// import are not copy of the exports they are like live connections => they point to the same place in memory
import add, { cart } from './shoppingCart.mjs'
add('pizza', 2)
add('coffee', 4)
add('tea', 3)


console.log(cart)