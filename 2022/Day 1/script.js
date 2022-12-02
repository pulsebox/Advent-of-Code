// import text from "./input.txt";
const text = await Deno.readTextFile("input.txt");
const input = text.split("\n").map((x) => parseInt(x));
// ensure that the last elf is not skipped
input.push(NaN);
let runningTotal = 0;
let highest = [0,0,0];
for (let i = 0; i < input.length; i++) {

    if (isNaN(input[i])) {
        for (let x = 0; x < highest.length; x++) {
            if (runningTotal > highest[x]) {
                highest[x+2] = highest[x+1];
                highest[x+1] = highest[x];
                highest[x] = runningTotal;
                // cull any additional values
                highest.length = 3;
                break;
            }
        }
        runningTotal = 0;
    } else {
        runningTotal = runningTotal + input[i];
    }
}
console.log('Part 1: The top elf is carrying ', highest[0]);
console.log("Part 2: The Top 3 Elves are carrying calories totalling ", highest[0] + highest[1] + highest[2]);