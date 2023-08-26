// Seeing the World: Think of at least five places in the world you’d like to visit.

let places: string[] = [
  "Paris, France",
  "Sydney, Australia",
  "Tokyo, Japan",
  "Cape Town, South Africa",
  "Rome, Italy",
];

// Print the array in its original order
console.log("Original order: ", places);

// Print the array in alphabetical order without modifying the actual list
const sortedPlaces = [...places].sort();
console.log("Alphabetically sorted: ", sortedPlaces);

// Show that the original array is still in its original order
console.log("Original order: ", places);

// Print the array in reverse alphabetical order without changing the order of the original list
const reversedSortedPlaces = [...sortedPlaces].reverse();
console.log("Reverse alphabetically sorted: ", reversedSortedPlaces);

// Show that the original array is still in its original order
console.log("Original order: ", places);

// Reverse the order of the original list
places.reverse();
console.log("Reversed original order: ", places);

// Reverse the order of the list again
places.reverse();
console.log("Back to original order: ", places);

// Sort the original array so it's stored in alphabetical order
places.sort();
console.log("Alphabetically sorted: ", places);

// Sort the array so it's stored in reverse alphabetical order
places.sort().reverse();
console.log("Reverse alphabetically sorted: ", places);
