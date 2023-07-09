// Exercise 1: Personal Message
const Name = "Eric";
console.log(`Hello ${Name}, would you like to learn some Python today?`);

// Exercise 2: Name Cases
const personName = "John Doe";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.toLocaleUpperCase());

// Exercise 3: Famous Quote
const quote = 'A person who never made a mistake never tried anything new.';
const author = 'Albert Einstein';
console.log(`${author} once said, "${quote}"`);

// Exercise 4: Famous Quote 2
const famous_person = 'Albert Einstein';
const message = `${famous_person} once said, "${quote}"`;
console.log(message);

// Exercise 5: Stripping Names
const nameWithWhitespace = '   John Doe   ';
console.log(nameWithWhitespace);
console.log(nameWithWhitespace.trim());

// Exercise 6: Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);

// Exercise 7: Favorite Number
const favoriteNumber = 7;
console.log(`My favorite number is ${favoriteNumber}.`);

// Exercise 8: Adding Comments
// Program 1: Prints a personal message
// This program greets the user with their name.
console.log(`Hello, ${Name}!`);

// Program 2: Performs basic arithmetic operations
// This program demonstrates addition, subtraction, multiplication, and division.
console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);

// Exercise 9: Names
const names = ['John', 'Jane', 'Alice'];

for (const name of names) {
    console.log(name);
}

// Exercise 10: Greetings
for (const name of names) {
    console.log(`Hello, ${name}!`);
}

// Exercise 11: Your Own Array
const transportation = ['car', 'motorcycle', 'bicycle'];

for (const mode of transportation) {
    console.log(`I would like to own a ${mode}.`);
}

// Exercise 12: Guest List
const dinnerGuests = ['Albert Einstein', 'Isaac Newton', 'Marie Curie'];

for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// Exercise 13: Changing Guest List
const unableToAttend = 'Isaac Newton';
const newGuest = 'Nikola Tesla';

console.log(`${unableToAttend} cannot make it to dinner.`);

const index = dinnerGuests.indexOf(unableToAttend);
if (index !== -1) {
    dinnerGuests[index] = newGuest;
}

for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// Exercise 14: More Guests
console.log('Good news! We found a bigger dinner table.');

const additionalGuests = ['Leonardo da Vinci', 'Galileo Galilei', 'Charles Darwin'];
dinnerGuests.unshift(...additionalGuests);

for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// Exercise 15: Shrinking Guest List
console.log('Oops! The new dinner table will not arrive in time.');

console.log('Sorry, we can only invite two guests for dinner.');

while (dinnerGuests.length > 2) {
    const removedGuest = dinnerGuests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

// Exercise 16: Seeing the World
const placesToVisit = ['Paris', 'Tokyo', 'New York', 'Rio de Janeiro', 'Sydney'];

console.log('Original order:');
console.log(placesToVisit);

console.log('Alphabetical order:');
console.log(placesToVisit.slice().sort());

console.log('Original order:');
console.log(placesToVisit);

console.log('Reverse alphabetical order:');
console.log(placesToVisit.slice().sort().reverse());

console.log('Original order:');
console.log(placesToVisit);

console.log('Reversed order:');
console.log(placesToVisit.reverse());

console.log('Original order:');
console.log(placesToVisit);

console.log('Sorted order:');
console.log(placesToVisit.sort());

console.log('Reverse sorted order:');
console.log(placesToVisit.sort().reverse());

// Exercise 17: Dinner Guests
console.log(`Number of people invited to dinner: ${dinnerGuests.length}`);

// Exercise 18: Arrays
const mountains = ['Mount Everest', 'K2', 'Matterhorn'];
console.log(mountains);

const countries = ['China', 'Pakistan', 'Switzerland'];
console.log(countries);

const cities = ['Beijing', 'Karachi', 'Zurich'];
console.log(cities);

const languages = ['Mandarin', 'Urdu', 'German'];
console.log(languages);

// Exercise 19: TypeScript Objects
const mountain = {
    name: 'Mount Everest',
    height: 8848,
};

const river = {
    name: 'Indus'
};

// Exercise 20: Intentional Error
let car: string = 'subaru';
console.log(car === 'subaru');
console.log(car !== 'bmw');

// Exercise 21: Conditional Tests
const Car2 = 'subaru';
console.log(Car2 === 'subaru');
const lowerCaseString = 'hello';
console.log(lowerCaseString === lowerCaseString.toLowerCase());
console.log(lowerCaseString !== lowerCaseString.toUpperCase());

const Num3 = 5;
const Num4 = 3;
console.log(Num3 > Num4);
console.log(Num3 < Num4);
console.log(Num3 >= Num4);
console.log(Num3 <= Num4);

const boolean1 = true;
const boolean2 = false;
console.log(boolean1 && boolean2);
console.log(boolean1 || boolean2);

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('apple'));
console.log(!fruits.includes('banana'));

// Exercise 22: Alien Colors #1
const alien_color = 'green';

if (alien_color === 'green') {
    console.log('You just earned 5 points!');
}

// Exercise 23: Alien Colors #2
if (alien_color === 'green') {
    console.log('You just earned 5 points for shooting the alien.');
} else {
    console.log('You just earned 10 points for shooting the alien.');
}

// Exercise 24: Alien Colors #3
if (alien_color === 'green') {
    console.log('You just earned 5 points!');
} else if (alien_color === 'yellow') {
    console.log('You just earned 10 points!');
} else if (alien_color === 'red') {
    console.log('You just earned 15 points!');
}

// Exercise 25: Stages of Life
const age = 25;

if (age < 2) {
    console.log('The person is a baby.');
} else if (age >= 2 && age < 4) {
    console.log('The person is a toddler.');
} else if (age >= 4 && age < 13) {
    console.log('The person is a kid.');
} else if (age >= 13 && age < 20) {
    console.log('The person is a teenager.');
} else if (age >= 20 && age < 65) {
    console.log('The person is an adult.');
} else {
    console.log('The person is an elder.');
}

// Exercise 26: Favorite Fruit
const favoriteFruit = 'banana';
console.log(`My favorite fruit is ${favoriteFruit}.`);

// Exercise 27: Adding Comments
// Function to make a shirt with the given size and message
function make_shirt(size: string, message: string) {
    console.log(`Creating a ${size} shirt with the message: "${message}".`);
}

make_shirt('M', 'I love TypeScript');
make_shirt('S', 'Hello, world!');

// Exercise 28: Adding Comments
function city_country(city: string, country: string) {
    return `${city}, ${country}`;
}

console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));
console.log(city_country('New York', 'USA'));

// Exercise 29: Album
function make_album(artist: string, title: string, tracks?: number) {
    const album: { artist: string; title: string; tracks?: number } = {
        artist,
        title,
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}

console.log(make_album('Taylor Swift', 'Lover'));
console.log(make_album('Ed Sheeran', 'Divide', 14));
console.log(make_album('Imagine Dragons', 'Evolve', 12));

// Exercise 30: Magicians
function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette'];
show_magicians(magicians);

// Exercise 31: Great Magicians
function make_great(magicians: string[]) {
    const great_magicians = magicians.map((magician) => `the Great ${magician}`);
    return great_magicians;
}

const great_magicians = make_great(magicians);
show_magicians(great_magicians);

// Exercise 32: Unchanged Magicians
const original_magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette'];
const original_show = make_great([...original_magicians]);
show_magicians(original_magicians);
show_magicians(original_show);

// Exercise 33: Sandwiches
function make_sandwich(...items: string[]) {
    console.log('Sandwich ingredients:');
    for (const item of items) {
        console.log('- ' + item);
    }
}

make_sandwich('bread', 'cheese', 'tomato');
make_sandwich('bread', 'turkey', 'lettuce', 'mayo');
make_sandwich('bread', 'ham', 'mustard');

// Exercise 34: Cars
function car_info(manufacturer: string, model: string, ...options: [string, any][]) {
    const car: { [key: string]: any } = { manufacturer, model };

    for (const option of options) {
        const [key, value] = option;
        car[key] = value;
    }

    return car;
}

const car1 = car_info('Toyota', 'Camry', ['color', 'red']);
const car2 = car_info('Honda', 'Civic', ['color', 'blue'], ['sunroof', true]);
const car3 = car_info('Ford', 'Mustang', ['color', 'black'], ['sport', true]);

console.log(car1);
console.log(car2);
console.log(car3);

