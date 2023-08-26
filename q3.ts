// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let myname: string = "Musa Bukhari";
console.log(myname.toLowerCase()); // musa bukhari
console.log(myname.toUpperCase()); // MUSA BUKHARI
console.log(myname.replace(/\b[a-z]/g, (letter) => letter.toUpperCase())); // Musa Bukhari
