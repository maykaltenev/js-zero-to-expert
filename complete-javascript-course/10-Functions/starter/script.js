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

// let greetArr = greeting => name => `${greeting} ${name}`

// console.log(greetArr('Hi')('Joans'))

// const lufthansa = {
//     airlane: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
// }
// The call and apply Methods
// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     // book: function() {}
//     book(flightNum, name) {
//         console.log(
//             `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//         );
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const book = lufthansa.book;
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings)

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//     name: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: [],
// }

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);
// // not so used
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);
// // call and spread out the arguments from array
// book.call(swiss, ...flightData);

// // bind method

// const bookEW = book.bind(eurowings);
// bookEW(23, 'Steven Willaims');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha COoper');


// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane)

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVat = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

