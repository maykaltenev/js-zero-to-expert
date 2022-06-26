console.log("Exporting module")

// const shoppingCart = 10;
export const cart = [];

// Blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typeicode.com/users');
// console.log('Finish fetching users');

// export const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`)
// }

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity }

export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`)
}