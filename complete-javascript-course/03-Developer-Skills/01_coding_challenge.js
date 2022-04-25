// Coding Challenge #1
// Given an array of forecasted maximum temperatures, 
// the thermometer displays a string with the given temperatures.
//  Example: [17, 21, 23] will print "... 
// 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
// 2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
// Test data:



function printForecast(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(`${arr[i]}°C in ${i + 1} days `);
    }
    return result.join('\n')
}

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));