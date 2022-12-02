const text = await Deno.readTextFile("input.txt");

const input = text.split("\n").map((x) => x.split(" "));
// if the last element is undefined, remove it
if (input[input.length - 1][0] === "") {
  input.pop();
}
const result = [[3,6,0], [0,3,6], [6,0,3]];

const totalScore = input.map((x) => {
    let first = x[0].charCodeAt(0) - 64;
    let second = x[1].charCodeAt(0) - (64 + 23);
    return result[first-1][second-1] + second;
});

console.log("Part 1: The total score is ", totalScore.reduce((a, b) => a + b, 0));

const newScore = input.map((x) => {

    let first = x[0].charCodeAt(0) - 64;
    let second = x[1].charCodeAt(0) - (64 + 23);

    location = result[first-1].indexOf((second * 3) - 3);
    return ((second * 3) - 3) + (location+1);
});

console.log("Part 2: The total score is ", newScore.reduce((a, b) => a + b, 0));

