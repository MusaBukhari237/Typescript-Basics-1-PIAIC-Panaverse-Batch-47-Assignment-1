// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwich(...items: string[]) {
  console.log(
    "Making a sandwich with the following items: " + items.join(", ")
  );
}

make_sandwich("bread", "mayo", "lettuce", "tomatoes", "chicken");
make_sandwich("bread", "mayo", "egg", "bacon");
make_sandwich("bread", "cheese", "ham");
