/* HOMEWORK #1
Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert
*/

// function tellStory([name, mood, activity]) {
//   let story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
//   console.log(story);
//   return story;
// }

// tellStory(["Bojan", "good", "playing"]);

/* HOMEWORK #2
Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert

BONUS: Write another function called validateNumber() that checks if a number is a valid number
 and call it for every number.
If one of the numbers of the array is invalid show an error message instead of a result.
*/

// function numberSum(arrayInput) {
//     let resultSum = 0;
//     for (let i = 0; i < numArray.length; i++) {
//         resultSum += numArray[i];
//     }
//     return resultSum;
// }

// let numArray = [2, 5, 8, 4, 3];
// let result = numberSum(numArray);
// console.log(result);

// function validateNumber([numberInput]) {
//     let result = 0;
//     if (
//         typeof numberInput === "number"
//     ) {
//         result += numberInput;
//         console.log(result);
//     } else {
//         console.log("Input valid numbers");
//     }
// }

// let numberArray = [2, 5, 8, 4, 3];

// validateNumber([2]);
// validateNumber([5]);
// validateNumber([8]);
// validateNumber([4]);
// validateNumber([3]);
// validateNumber(["Bojan"]);


/* HOMEWORK #3
Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC !"
*/
// function concatenateStrings(inputArray) {

//     for (let i = 0; i < inputArray.length; i++) {
//         console.log(inputArray.join(" "));
//     }
//     return;
//     inputArray;
// }


// let stringArray = ["Hello", "there", "students", "of", "SEDC", "!"];
// concatenateStrings(stringArray);

/* HOMEWORK #4
Title: Looping structures

Description:Write a loop in javascript that goes from 1-20 that will print each number in
the console and add "number is even" after every even number and add "number is odd" after every odd number
*/

// for (let counter = 1; counter <= 20; counter++) {
//   if (counter % 2 === 0) {
//     console.log(`${counter} this is even number`);
//   } else {
//     console.log(`${counter} this is odd number`);
//   }
// }

/* HOMEWORK #5
Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it
*/



function sumAndMaxAndMinNumbersTwo(inputArray) {
    let max = inputArray[0];
    let min = inputArray[0];
    for (let counter = 0; counter < inputArray.length; counter++) {
        if (inputArray[counter] !== Number) {
            console.log(`${inputArray[counter]} is not a number. Input all numbers in array.`)
        }
    }
    for (let counter = 0; counter < inputArray.length; counter++) {
        let numberOne = inputArray[counter];
        if (numberOne > max)
            max = numberOne;
        let numberTwo = inputArray[counter];
        if (numberTwo < min) min = numberTwo;
    }
    let resultSum = max + min;
    return (`Max: ${max}, Min: ${min}, Sum: ${resultSum}.`);
}




let sumArray = [3, 5, 6, 8, 11];

let finalResultSum = sumAndMaxAndMinNumbersTwo(sumArray);
console.log(finalResultSum);

/*
HOMEWORK #6
Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
*/

// function combineNamesWithArrays(firstNames, lastNames) {
//   let fullName = 0;
//   let fullNames = [];

//   for (let i = 0; i < firstNames.length && lastNames.length; i++) {
//     let fullName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
//     fullNames.push(fullName);
//   }

//   return fullNames;
// }
// let firstNameArray = ["Bojan", "Ivo", "Kiko"];
// let lastNameArray = ["Jankov", "Sokoloski", "Spirkoski"];
// let resultArray = combineNamesWithArrays(firstNameArray, lastNameArray);
// console.log(resultArray);
