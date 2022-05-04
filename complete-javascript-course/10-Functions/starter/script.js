// 'use strict';

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     const bookings = [];
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     };
//     bookings.push(booking);
//     return bookings
// }
// console.log(createBooking('LH123'))
// console.log(createBooking('LH123', 2, 800))
// console.log(createBooking('LH123', 2))


// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 231421412,
// }
// const checkIn = function (flightNum, passenger) {
//     if (passenger.passport = 231421412) {
//         alert('Checked in ');
//     } else {
//         alert('Wrong password');
//     }
// }

// console.log(flight, jonas);
// const newPassport = function (person) {
//     person.passenger = Math.trunc(Math.random() * 1000000);
// }

// // First-class functions
// const add = (a, b) => a + b;

// // Pass functions as arguments to OTHER functions
// const great = () => console.log('Hey, Jonas')
// // btnClose.addEventListener('click', great);

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }
// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed by: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
// }
// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`)
//     }
// }

// const greeterHey = greet('hey');
// // console.log(greeterHey('Jonas'));
// // console.log(greeterHey('Steven'));

// console.log(greet('Hello')('Joans'))

let greetArr = greeting => name => `${greeting} ${name}`

console.log(greetArr('Hi')('Joans'))