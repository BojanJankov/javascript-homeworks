let yearInput = prompt(
  "To calculate what Chinese zodiac are you, enter what year you are born?"
);

let yearNumber = Number(yearInput);

let zodiacYearNumber = (yearNumber - 4) % 12;

if (yearNumber === null || yearNumber === 0 || isNaN(yearNumber)) {
  alert("Enter right year with numbers");
} else if (zodiacYearNumber === 0) {
  alert("You are Rat");
} else if (zodiacYearNumber === 1) {
  alert("You are Ox");
} else if (zodiacYearNumber === 2) {
  alert("You are Tiger");
} else if (zodiacYearNumber === 3) {
  alert("You are Rabbit");
} else if (zodiacYearNumber === 4) {
  alert("You are Dragon");
} else if (zodiacYearNumber === 5) {
  alert("You are Snake");
} else if (zodiacYearNumber === 6) {
  alert("You are Horse");
} else if (zodiacYearNumber === 7) {
  alert("You are Goat");
} else if (zodiacYearNumber === 8) {
  alert("You are Monkey");
} else if (zodiacYearNumber === 9) {
  alert("You are Rooster");
} else if (zodiacYearNumber === 10) {
  alert("You are Dog");
} else if (zodiacYearNumber === 11) {
  alert("You are Pig");
}
