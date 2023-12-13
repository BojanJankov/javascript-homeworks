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


function typeOfFunction(type) {
    let input = typeof type;
    console.log(input)
    return input;
}

typeOfFunction(3 > 4)
typeOfFunction("Bojan")
typeOfFunction(54)
typeOfFunction()
typeOfFunction(null)




// // HOMEWORK PART 2
// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// // Bonus: Make the same function work for converting dog to human years as well



function dogYearCalc(years, type) {
    let humanYearResult = years / 7;
    let dogYearResult = years * 7;
    if (type === "dog") {
        console.log(`This is your dog years:${dogYearResult}`)
    } else if (type === "human")
        console.log(`This is your human years:${humanYearResult}`)
    return;
}

dogYearCalc(50, "human");
dogYearCalc(7, "dog");


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
    return;
}

atm(1000); 