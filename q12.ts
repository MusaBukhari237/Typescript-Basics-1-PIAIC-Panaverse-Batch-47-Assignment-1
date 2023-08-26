// Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

{
  let friends: string[] = ["Musa", "Ali", "Subhan"];
  for (let i: number = 0; i < friends.length; i++) {
    console.log(`Hello ${friends[i]}, how are you doing today?`);
  }
}
