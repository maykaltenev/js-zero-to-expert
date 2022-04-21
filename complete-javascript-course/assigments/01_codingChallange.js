// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn's mass and height invariables
// 2. Calculate both their BMI susing the formula(you can even implement both
// versions)
// 3. Create a Boolean variable'markHigherBMI' containing in formation about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// --- Data 1
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let johnBMI = massJohn / (heightJohn ** 2); // 24.194608809993426
// let markBMI = massMark / (heightMark ** 2); // 27.309968138370508
// let markHigherBMI = johnBMI > markBMI;

// --- Data 2
let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;


let markBMI = massMark / (heightMark ** 2);
let johnBMI = massJohn / (heightJohn * heightJohn);

console.log(johnBMI)
console.log(markBMI)


let markHigherBMI = johnBMI < markBMI;
console.log(markHigherBMI)