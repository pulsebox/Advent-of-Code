// We take the first and last number contained in the string and add the numbers as strings together
function addNumbers(str) {
    let first = "";
    let last = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "0" && str[i] <= "9") {
        first += str[i];
        // end the loop if the first number has been found
        break;
        }
    }
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] >= "0" && str[i] <= "9") {
        last += str[i];
        // end the loop if the last number has been found
        break;
        }
    }
    return first + last;
}

function findAndAddNumbers(string) {

    if (string === "") {
        return "";
    }
    let first = "";
    let last = "";
    const validNumbersObj = {
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9"
    };
    const validNumbersArr = Object.keys(validNumbersObj);

    function containsNumberWord(string) {
  
        for (let word of validNumbersArr) {
            if (string.includes(word)) {
                return word; // The string contains a number word
            }
        }
        return null; // No number word found in the string
    }

    lettersUntilNumber = "";
    // loop through the string until lettersUntilNumber is equal to a valid number from validNumbers
    for (let i = 0; i < string.length; i++) {
        lettersUntilNumber += string[i];
        number = containsNumberWord(lettersUntilNumber);
        if (number || (!isNaN(string[i]))) {
            // console.log("number: " + number);
            first = validNumbersObj[number] || string[i];
            break;
        }
    }

    lettersUntilNumber = "";
    // loop through from the end of string until lettersUntilNumber is equal to a valid number from validNumbers
    for (let i = string.length - 1; i >= 0; i--) {
        lettersUntilNumber = string[i] + lettersUntilNumber;

        number = containsNumberWord(lettersUntilNumber);
        if (number || (!isNaN(string[i]))) {
            // console.log("number: " + number);
            last = validNumbersObj[number] || string[i];
            break;
        }
    }

    return first + last;
}

// load the input.txt file
const fs = require("fs");
const input = fs.readFileSync("C:/Advent-of-Code/2023/input.txt", "utf-8");

// split the input into an array of strings
const arr = input.split("\n");

// Part 1
let result = 0;

// loop through the array and add the numbers together
for (let i = 0; i < arr.length; i++) {
    result += Number(addNumbers(arr[i]));
}

console.log("part 1: " + result);

// Part 2
result = 0;

// loop through the array, find then add the numbers together
for (let i = 0; i < arr.length; i++) {
    result += Number(findAndAddNumbers(arr[i]));
}

console.log("part 2: " + result);