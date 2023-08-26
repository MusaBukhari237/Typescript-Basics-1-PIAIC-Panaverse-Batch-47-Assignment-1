// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

function city_country(city: string, country: string) {
  return city + ", " + country;
}

var city_country_1 = city_country("Lahore", "Pakistan");
console.log(city_country_1);

var city_country_2 = city_country("New York", "United States");
console.log(city_country_2);

var city_country_3 = city_country("London", "United Kingdom");
console.log(city_country_3);
