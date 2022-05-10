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


// const addTaxRate = function (rate) {
//     return function (value) {
//         return value + value * rate;
//     }
// }
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));


// Coding Challenge #1
/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose,
and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option.
  The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

//         this.displayResults();
//         this.displayResults('string');
//     },
//     displayResults(type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//     }
// }
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// Immediately Invoked Function
// const runOnce = function () {
//     console.log('This will never run again');
// };
// // IIFE => not used anymore because we can create scope with curly brackets;
// runOnce();
// (function () {
//     console.log('This will never run again');
//     const isPrivate = 23;
// })();
// (() => console.log('This will ALSO never run again'))();

// {
//     const isPrivate = 23;
//     var notPrivate = 46;
// }
// console.log(notPrivate)

// Closure
// closure happens automatically in specific situations
// const secureBooking = function () {
//     let passengerCount = 0; // clear the stack
//     return function () { //return result
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }
// // the function environment from which booker was created does not exist anymore 
// //closure remembers the variables by the time functions was created
// const booker = secureBooking(); // the function does not exist
// // by execution the variable environment of this context is emptied
// booker() // any functions always has access to the variable environment of the execution context in which the function was created
// booker() // a function  alway has access to the variable environment in which it was created, even after a debt execution is gone
// booker() //thx to the closure a function does not lose connection to variables that existed at the functions birthplace
// // closure has priority over the scope chain

//A closure is the closed-over variable environment of the execution context in which a function was created, even after the execution context is gone
//A closure gives a function access to its outer scope which preserves the scope chain thorough time

// let f;
// const g = function () {
//     const a = 23;
//     f = function () {
//         return (a * 2);
//     }
// }
// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2);
//     }
// }
// console.log(g())
// console.log(f())

// //Re-assigning f function
// console.log(h()) // after reassigning new closure the old closure is released 
// console.log(f())


// Example 2
// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function () { }, 1000)
//     console.log(`Will start boarding in ${wait} seconds`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓
 
Take the IIFE below and at the end of the function, 
attach an event listener that changes the color of the selected h1 element ('header')
 to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you)
 WHY this worked! Take all the time you need. 
 Think about WHEN exactly the callback function is executed,
  and what that means for the variables involved in this example.
 
GOOD LUCK 😀
*/


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  let blue = function () {
    header.style.color = 'blue'
  }
  document.querySelector('body').addEventListener('click', blue)
  console.dir(blue)
})();
// forEach wont break the loop, for of can be brocken
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
