console.log("Script is working");

function Animal(name, kind) {
  this.name = name;
  this.kind = kind;

  this.speak = function () {
    console.log(`${this.kind} ${this.name}, says: "Hey bro!!!" `);
  };
}

const name = prompt("Enter your animal name:");
const kind = prompt("Enter your animal kind:");

const animal = new Animal(name, kind);

animal.speak();
