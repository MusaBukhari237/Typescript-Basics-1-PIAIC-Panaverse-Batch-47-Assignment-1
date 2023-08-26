// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i: number = 0; i < numbers.length; i++) {
  let ordinalEnding;
  let number1 = numbers[i];

  if (number1 === 1) {
    ordinalEnding = "st";
  } else if (number1 === 2) {
    ordinalEnding = "nd";
  } else if (number1 === 3) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }
  console.log(number1 + ordinalEnding);
}
