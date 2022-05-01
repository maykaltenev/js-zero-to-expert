// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Createanarray'events'ofthedifferentgameeventsthathappened(no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute64 was unfair.So remove this event from the game events log.
// 3. Computeandlogthefollowingstringtotheconsole: "Aneventhappened,on average, every 9 minutes"(keep in mind that a game has 90 minutes)
// 4. Loop over'gameEvents'and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF]17: ⚽   GOAL GOOD LUCK 😀

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1. Create an array'events'of the different game events that happened(no duplicates)

let resultOfEvents = [];
for (const [key, event] of gameEvents) {
    if (!resultOfEvents.includes(event)) {
        resultOfEvents.push(event);
    }
}
console.log(resultOfEvents);
//  2. After the game has finished, is was found that the yellow card from minute64 was unfair.So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);
// 3.
gameEvents.set('average', `An event happened,on average, every ${90 / gameEvents.size} minutes`)
console.log(gameEvents.get('average'));
// 4. 
for (const [key, value] of gameEvents) {
    let arrayEvent = [...gameEvents]
    if (key === arrayEvent[arrayEvent.length - 1][0]) {
        // do not print the last event(its a string)
        break;
    }
    if (key <= 45) {
        console.log((`[FIRST HALF]${key}: ${value}`));
    } else {
        console.log((`[SECOND HALF]${key}: ${value}`));
    }
}