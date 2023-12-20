console.log("Script is working");

/* HOMEWORK PART 1
Change the page with JavaScript

Change the text of all paragraphs and headers with javascript
Note:The html must not be changed
*/

const allParagprahs = document.querySelectorAll(".paragraph");
allParagprahs.innerText = "This text was changed by Bojan!"

console.log(allParagprahs.innerText);

const headerOne = document.querySelector("#mainHeading");

headerOne.innerText = "New title for homework by Bojan";

console.log(headerOne.innerText);

const divs = document.querySelectorAll("div");

const lastDiv = divs[divs.length - 1];

const headerTwo = lastDiv.querySelector("h1");
const headerThree = lastDiv.querySelector("h3");

headerTwo.innerText = "I changed this(Bojan)";
headerThree.innerText = "This too!";

console.log(headerTwo);
console.log(headerThree);
