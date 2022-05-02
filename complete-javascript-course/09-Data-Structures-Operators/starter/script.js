// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
// //       close: 23,
// //     },
// //     sat: {
// //       open: 0, // Open 24 hours
// //       close: 24,
// //     },
// //   },
// //   orderPasta: function (ing1, ing2, ing3) {
// //     console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
// //   },
// //   orderPizza: function (mainIngredient, ...otherIngredients) {
// //     console.log(mainIngredient);
// //     console.log(otherIngredients);
// //   }
// // };
// // // const mainMenuCopy = [...restaurant.mainMenu];

// // // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// // // console.log(menu);

// // // const str = 'Jonas';
// // // const letters = [...str, '', 'S.'];
// // // console.log(letters);
// // // console.log(...str);

// // // const ingredients = [
// // //   prompt('Let#s make pasta!Ingredient 1?'),
// // //   prompt('Ingredient 2?'),
// // //   prompt('Ingredient 3?'),
// // // ]
// // // console.log(ingredients);

// // // restaurant.orderPast(ingredients[0], ingredients[1], ingredients[2]);
// // // restaurant.orderPast(...ingredients);

// // // // Object
// // // const newRestaurant = { founded: 1998, ...restaurant, founder: 'Giuseppe' };
// // // console.log(newRestaurant);

// // // const restaurantCopy = { ...restaurant };
// // // restaurantCopy.name = 'Ristorante Roma';
// // // console.log(restaurantCopy.name);
// // // console.log(restaurant.name);

// // // Spread, because on RIGHT side of = const arr = [1,2 ... [3,4]];
// // // 1.) Destructuring
// // // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // // console.log(a, b, others);

// // // const [pizza, , risotto, ...otherFood] = [
// // //   ...restaurant.mainMenu,
// // //   ...restaurant.starterMenu,
// // // ];
// // // console.log(pizza, risotto, otherFood);

// // // // Objects
// // // const { sat, ...weekdays } = restaurant.openingHours;
// // // console.log(weekdays);

// // // // 2) Functions
// // // const add = function (...numbers) {
// // //   let sum = 0;
// // //   for (let i = 0; i < numbers.length; i++) {
// // //     sum += numbers[i]
// // //   }
// // //   console.log(numbers);
// // // }

// // // add(2, 3);
// // // add(5, 3, 7, 2);
// // // add(8, 2, 5, 3, 2, 1, 4);
// // // const x = [23, 5, 7];
// // // add(...x);

// // // restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// // // restaurant.orderPizza('mushrooms')

// // // Use ANY data type, return ANY data type, short-circuiting
// // console.log(3 || 'Jonas');
// // console.log('' || 'Jonas');
// // console.log(true || 0);
// // console.log(undefined || null);

// // console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // restaurant.numGuests = 23;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // console.log('Hello' && 23 && null && 'jonas');

// // if (restaurant.orderPizza) {
// //   restaurant.orderPasta('mushrooms', 'spinach');
// // }
// // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// //Map
// // const rest = new Map();
// // rest.set('name', 'Classic Italian');
// // rest.set(1, 'Firenze, Italy');
// // rest.set(2, 'Lisbon, Portugal');
// // rest
// //   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// //   .set('open', 11)
// //   .set('close', 23)
// //   .set(true, 'We are open :D')
// //   .set(false, 'We are closed :(');

// // console.log(rest.get('name'))
// // console.log(rest.get(true))

// // const time = 23;
// // rest.get(time > rest.get('open') && time < rest.get('close'));

// // console.log(rest.has('categories'))
// // rest.delete(2);
// // // rest.clear()

// // const arr = [1, 2];
// // rest.set(arr, 'Test');
// // rest.set(document.querySelector('h1'), 'Heading');
// // console.log(rest);
// // console.log(rest.size);

// // console.log(rest.get(arr))

// const question = new Map([
//   ['question', 'What is the best programing language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ])
// console.log(question)

// // Convert object to map
// // console.log(Object.entries(OpeningHours));
// // const hoursMap = new Map(Object.entries(OpeningHours));


// // Quiz app
// // for (const [key, value] of question) {
// //   if (typeof key === 'number') {
// //     console.log(`Answer ${key}: ${value}`)
// //   }
// // }

// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`)
//   }
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer)
// console.log(question.get(question.get('correct') === answer));

// // Convert map to array

// console.log([...question])

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal')) //case sensitive

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1))

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats;
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat ;)');
  } else {
    console.log('You got lucky! :)');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E')

// Fix capitalization in name
const passenger = 'j0nAs' //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase();