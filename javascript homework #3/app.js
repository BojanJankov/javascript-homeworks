console.log("Its working");

// STUDENT EXERCISE - #3
// THE AGE CALCULATOR
// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the age based on those years.
// outputs the result to the screen like so: "You are NN years old"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.


function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    console.log(`You are ${age} years old`);
}

calculateAge(2004);
calculateAge(2010);
calculateAge(2000);


// HOMEWORK PART 1
// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

// object
// boolean
// number
// string
// undefined

function stringFunction(stringInput) {
    console.log(`This is string:${stringInput}`);
    return;

}

stringFunction("Bojan");

function numberFunction(numberInput) {
    console.log(`This is number: ${numberInput}`);
    return;
}

numberFunction(54);

function booleanFunction(booleanInput) {
    console.log(`This is boolean: ${booleanInput}`);
    return;
}

booleanFunction(4 > 5);

function undefinedFunction() {
    let undefinedInput = undefined;
    console.log(`This is undefind: ${undefinedInput}`);
    return;
}

undefinedFunction();

function nullFunction() {
    let nullInput = null;
    console.log(`This is obejct: ${nullInput}`);
    return;
}

nullFunction();


// // HOMEWORK PART 2
// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// // Bonus: Make the same function work for converting dog to human years as well



function dogYearCalc(year) {
    let dogYearResult = year * 7;
    console.log(`This is your dog years:${dogYearResult}`)
    return dogYearResult;
}

dogYearCalc(5);

function humanYearCalc(dogYear) {
    let humanYearResult = dogYear / 7;
    console.log(`This is your human years:${humanYearResult}`)
    return humanYearResult;
}

humanYearCalc(35);

// HOMEWORK PART 3
// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the amount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!



function atm(ammountOfMoney) {
    let moneyInput = prompt("Enter your ammount of money do you like to take out:");

    let moneyNumber = Number(moneyInput);

    if (moneyNumber > ammountOfMoney) {
        alert("You dont have enough money, try again when you put in")
    } else if (moneyNumber <= ammountOfMoney) {
        let withdrawMoney = ammountOfMoney - moneyNumber;
        alert(`Thank you for your withdraw of ${moneyNumber}, this is your balance now: ${withdrawMoney}`)
    }
}

atm(1000); 