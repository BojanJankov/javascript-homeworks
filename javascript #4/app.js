/* HOMEWORK #1
Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert
*/

function tellStory([name, mood, activity]) {
  let story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
  console.log(story);
  return story;
}

tellStory(["Bojan", "good", "playing"]);

/* HOMEWORK #2
Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert

BONUS: Write another function called validateNumber() that checks if a number is a valid number
 and call it for every number. 
If one of the numbers of the array is invalid show an error message instead of a result.
*/

function numberSum([numOne, numTwo, numThree, numFour, numFive]) {
  let resultSum = numOne + numTwo + numThree + numFour + numFive;
  console.log(resultSum);
  return resultSum;
}

numberSum([2, 5, 8, 4, 3]);

function validateNumber([numOne, numTwo, numThree, numFour, numFive]) {
  if (
    typeof numOne === "number" &&
    typeof numTwo === "number" &&
    typeof numThree === "number" &&
    typeof numFour === "number" &&
    typeof numFive === "number"
  ) {
    let result = numOne + numTwo + numThree + numFour + numFive;
    console.log(result);
  } else {
    console.log("Input valid numbers");
  }
}

validateNumber([2, 5, 8, 4, 3]);

/* HOMEWORK #3
Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC !"
*/
function concatenateStrings() {
  console.log(inputArray.join(" "));
  return;
  inputArray;
}
const inputArray = ["Hello", "there", "students", "of", "SEDC", "!"];
concatenateStrings();

/* HOMEWORK #4
Title: Looping structures

Description:Write a loop in javascript that goes from 1-20 that will print each number in 
the console and add "number is even" after every even number and add "number is odd" after every odd number
*/

for (let counter = 1; counter <= 20; counter++) {
  if (counter % 2 === 0) {
    console.log(`${counter} this is even number`);
  } else {
    console.log(`${counter} this is odd number`);
  }
}

/* HOMEWORK #5
Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it
*/

let sumArray = [3, 5, 6, 8, 11];

function sumAndMaxAndMinNumbersTwo() {
  let max = sumArray[0];
  let min = sumArray[0];
  for (let counter = 0; counter < sumArray.length; counter++) {
    let numberOne = sumArray[counter];
    if (numberOne > max) max = numberOne;
  }

  for (let counter = 0; counter < sumArray.length; counter++) {
    let numberTwo = sumArray[counter];
    if (numberTwo < min) min = numberTwo;
  }

  let resultSum = max + min;
  console.log(resultSum);
  return resultSum;
}

sumAndMaxAndMinNumbersTwo(sumArray);

/*
HOMEWORK #6
Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"] 
*/

function combineNamesWithArrays(firstNames, lastNames) {
  let fullName = 0;
  let fullNames = [];

  for (let i = 0; i < firstNames.length && lastNames.length; i++) {
    let fullName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
    fullNames.push(fullName);
  }

  return fullNames;
}
let firstNameArray = ["Bojan", "Ivo", "Kiko"];
let lastNameArray = ["Jankov", "Sokoloski", "Spirkoski"];
let resultArray = combineNamesWithArrays(firstNameArray, lastNameArray);
console.log(resultArray);
