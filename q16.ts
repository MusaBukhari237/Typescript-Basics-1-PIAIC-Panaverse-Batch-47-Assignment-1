// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table. Add one new guest to the beginning of your array. Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let dinnerGuest: string[] = ["Ali", "Subhan", "Naseer"];

dinnerGuest.unshift("Bilal"); // add one new guest to the beginning of the array
dinnerGuest.splice(2, 0, "Zabi"); // add one new guest to the middle of the array
dinnerGuest.push("Imran"); // append one new guest to the end of the list
console.log(`Found a bigger dinner table!`);
for (let i = 0; i < dinnerGuest.length; i++) {
  console.log(`Hi ${dinnerGuest[i]}, you are invited to dinner!`);
}
