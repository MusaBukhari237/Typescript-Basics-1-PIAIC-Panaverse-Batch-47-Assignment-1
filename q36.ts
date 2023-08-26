// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


function makeShirt(sizeT: string, msg: string) {
  console.log(
    "The shirt is a size" + sizeT + "with the message" + msg + " printed on it."
  );
}
makeShirt("M", "I Love JavaScript");
