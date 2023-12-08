console.log("Script is working");

let yearInput = prompt("Enter your year to calculate your Chinese zodiac sign:")

let yearNumber = Number(yearInput)

let zodiacNumber = (yearNumber - 4) % 12;

switch (zodiacNumber) {
    case 0:
        alert("You are Rat")
        break;
    case 1:
        alert("You are Ox")
        break;
    case 2:
        alert("You are Tiger")
        break;
    case 3:
        alert("You are Rabbit")
        break;
    case 4:
        alert("You are Dragon")
        break;
    case 5:
        alert("You are Snake")
        break;
    case 6:
        alert("You are Horse")
        break;
    case 7:
        alert("You are Goat")
        break;
    case 8:
        alert("You are Moonkey")
        break;
    case 9:
        alert("You are Rooster")
        break;
    case 10:
        alert("You are Dog")
        break;
    case 11:
        alert("You are Pig")
        break;
    default:
        alert("Enter valid year and try again!")
        break;
}
