var abc = require("./lab2.js")

var readlineSync = require("readline-sync");

// Wait for user's response.
console.log("Please write your date like this: 2023 January 21")
var year = readlineSync.question("year?:");
var month = readlineSync.question("month?:");
var day = readlineSync.question("day?:");


///console.log(`Your date is ${year}, ${month}, ${day} ${abc.getDayOfTheWeek(, "September", 20)}`);
console.log(`Your date is ${year} ${month}, ${day} ${abc.getDayOfTheWeek(parseInt(year), month, parseInt(day))}`);
