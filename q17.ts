// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner. Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

let guest: string[] = ["Bilal", "Ali", "Zabi", "Subhan", "Naseer", "Imran"];

console.log("I can invite only two people for dinner.");

while (guest.length > 2) {
  let removedGuest = guest.pop();
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

console.log(`I'm inviting ${guest[0]} and ${guest[1]} to dinner.`);
while (guest.length > 0) {
  let removedGuest = guest.pop();
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
console.log(guest);
