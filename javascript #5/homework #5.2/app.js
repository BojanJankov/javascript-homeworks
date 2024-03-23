console.log("Script is working");

let main = document.querySelector("body");

function printNumbers(numArray) {
    main.innerHTML = "";
    main.innerHTML += "<ul>";


    for (let i = 0; i < numArray.length; i++) {
        main.innerHTML += `        
            <li>${numArray[i]}</li>
        `;
    }

    main.innerHTML += "</ul>";

    let sum = 0;


    for (let counter = 0; counter < numArray.length; counter++) {
        sum += numArray[counter];
    }


    main.innerHTML += `<p>This is the sum of numbers: ${sum}</p>`;


    return main.innerHTML;

}

let numberArray = [3, 4, 5, 6, 2];

let result = printNumbers(numberArray);

console.log(result);




