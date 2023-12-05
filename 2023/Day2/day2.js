// Game 1: 4 green, 7 blue; 2 blue, 4 red; 5 blue, 2 green, 2 red; 1 green, 3 red, 9 blue; 3 green, 9 blue; 7 green, 2 blue, 2 red
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

// import input from './input.txt', create an array of strings
const input = require('fs').readFileSync('C:/Advent-of-Code/2023/Day2/input.txt', 'utf8').split('\n');

function makeGame(string) {
    // remove 'Game xxx: ' from the beginning of the string
    string = string.replace(/Game \d+: /, '');
    // split string into an array of strings
    const game = string.split('; ');
    // split each string into an array of objects
    for (let i = 0; i < game.length; i++) {
        game[i] = game[i].split(', ').map(x => {
            let obj = {};
            obj[x.split(' ')[1]] = parseInt(x.split(' ')[0]);
            return obj;
        });
    }
    // return the array of arrays
    return game;
    
}

const games = input.map(x => makeGame(x));

games.pop();

function validateGame(red, green, blue, part2) {

    let sumOfIds = 0;
    let sumOfPowers = 0;

    for (let i = 0; i < games.length; i++) {
        // decide if it is possible to complete the game given the number of each color in the bag
        let possible = true;
        let maxColours = {red: 0, green: 0, blue: 0};
        for (let j = 0; j < games[i].length; j++) {
            let round = games[i][j];
            // check if the game is possible
            for (let k = 0; k < round.length; k++) {
                let color = Object.keys(round[k])[0];
                let num = Object.values(round[k])[0];
                if (part2 && num > maxColours[color]) {
                    maxColours[color] = num;
                }
                if (color === 'red' && num > red) {
                    possible = false;
                } else if (color === 'green' && num > green) {
                    possible = false;
                } else if (color === 'blue' && num > blue) {
                    possible = false;
                }
            }
        }
        if (part2) {
            // Multiply the max of each color together
            const power = maxColours.red * maxColours.green * maxColours.blue; 
            sumOfPowers = sumOfPowers + power;
        }
        if (possible) {
            sumOfIds = sumOfIds + i + 1;
        }
    }
    if (part2) {
        return sumOfPowers;
    } else {
        return sumOfIds;
    }
}


console.log("Part 1:");
// print out the games
console.log(validateGame(12, 13, 14));

console.log("Part 2:");

console.log(validateGame(12, 13, 14, true));

