console.log("Script is working!");

const paragraph = document.querySelector("#paragraph");

function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;

  this.displayReadingStatus = function () {
    if (this.readingStatus === "yes") {
      paragraph.innerText = `You already read '${this.title}' by ${this.author}.`;
    } else if (this.readingStatus === "no") {
      paragraph.innerText = `You still need to read '${this.title}' by ${this.author}.`;
    }
  };
}

const title = prompt("Enter title:");

const author = prompt("Enter author:");

const readingStatus = prompt("Do you already read this book? Enter yes or no:");

const displayBook = new Book(title, author, readingStatus);

displayBook.displayReadingStatus();
