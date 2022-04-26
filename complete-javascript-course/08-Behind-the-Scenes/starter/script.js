'use strict';

// function calcAge(birthdayYear) {
//     const age = 2037 - birthdayYear;
//     return age;
//     function printAge() {
//         let output = `You are ${age}, born in ${birthdayYear}`

//         if (birthdayYear >= 1981 && birthdayYear <= 1996) {
//             var millennial = true;
//             const firstName = 'Steven';
//             const str = `Oh, and you're a millennial ${firstName}`;

//             function add(a, b) {
//                 return a + b;
//             }
//             output = 'NEW OUTPUT!'
//         }
//         console.log(millenial);

//         console.log(output);
//     }
//     printAge();
//     return age;
// }


// const firstName = 'Jonas';
// calcAge(1991);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(2, 3));

function addDecl(a, b) {
    return a + b;
}
const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;