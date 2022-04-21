// The Complete JavaScript Course 6
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUC

let massMark = 195;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;


let markBMI = massMark / (heightMark ** 2);
let johnBMI = massJohn / (heightJohn * heightJohn);
console.log(markBMI)

if (markBMI > johnBMI) {
    console.log(`Marks BMI (${markBMI.toFixed(1)} )is higher than John's BMI (${johnBMI.toFixed(1)})!`);
    // BMI (28.3) is higher than John's (23.9)!"
} else {
    console.log(`Johns BMI (${johnBMI.toFixed(1)}) is higher than Marks's BMI (${markBMI.toFixed(1)})!`);
}