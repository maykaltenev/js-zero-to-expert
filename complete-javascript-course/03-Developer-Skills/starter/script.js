// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 2) Breaking up into sub-problems 
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
const calcTempAmplitude = function (t1, t2) {
    let temps = t1.concat(t2);
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') {
            continue;
        }
        if (curTemp > max) {
            max = curTemp;
        }
        if (curTemp < min) {
            min = curTemp;
        }
    }
    return max - min;
}
const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
console.log(amplitude)