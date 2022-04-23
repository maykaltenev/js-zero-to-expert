// 44. Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYeah) {
    //     return 2037 - birthYeah;
    // }
    calcAge: function (this) {
        return 2037 - this.birthYeah;
    }
}

console.log(jonas.calcAge(cd))
// console.log(jonas['calcAge'](1991))