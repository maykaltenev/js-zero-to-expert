'use strict';
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
*/

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`'${this.make}' is going with ${this.speed} km/h after accelerating the speed!`)
    }
    break() {
        this.speed -= 5;
        console.log(`'${this.make}' is going with ${this.speed} km/h after breaking the speed! `)
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;

    }
}

let firstCar = new Car('Ferrari', 150);
let secondCar = new Car('Porsche', 130);
firstCar.accelerate()
secondCar.accelerate()
firstCar.break()
secondCar.break()
console.log(firstCar.speedUS())
// const account = {
//     owner: 'Jonas',
//     movements: [200, 530, 120, 30],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },
//     set latest(move) {
//         this.movements.push(move);
//     }
// }

// console.log(account.latest);
// account.latest = 50;
// console.log(account.latest);