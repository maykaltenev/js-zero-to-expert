// // Importing module
// // console.log("Importing module");
// // console.log(addToCart('bread', 5))
// // console.log(price, tq)
// // import { addToCart, price, totalQuantity as tq } from "./shoppingCart.js";

// const { CardTravel } = require("@material-ui/icons");

// import * as ShoppingCart from './shoppingCart.mjs'

// // ShoppingCart.addToCart('bread', 5);
// // console.log(ShoppingCart.totalPrice)

// // we are not missing usually names when exporting default but its possible to be done
// //  import add, { addToCart, price, totalQuantity as tq } from './shoppingCart.js'
// // add('pasta', 5)


// // import are not copy of the exports they are like live connections => they point to the same place in memory
// import add, { cart } from './shoppingCart.mjs'
// add('pizza', 2)
// add('coffee', 4)
// add('tea', 3)


// console.log(cart)

// // console.log('Starting fetching')
// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json()
// // console.log(data);
// // console.log('Something')

// const getLastPost = async function () {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json()
//     console.log(data);
//     return { title: data.at(-1).title, text: data.at(-1) }
// }
// const lastPost = getLastPost()
// console.log(lastPost)

// const lastPost2 = await getLastPost();
// console.log(lastPost2)

const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart SHIPPING COST IST ${shippingCost}`);
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} order from supplier`)
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    }
})();
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);