"use strict";

// function myFunc() {
//   let value = "hi";
//   return value;
// }
// let result = myFunc();
// console.log(result);

//ex1
// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// let result = greeting("Peter");
// console.log(result);

//ex2
// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// let result = greeting("any name");
// console.log(result);

//2
// console.log(greeting("any name")); // hello any name
//3
// console.log(greeting()); // hello undefined
//4
// const txt = `Greeting is ${greeting("a name")}`;
// console.log(txt); // Greeting is Hello a name;
//5

//Just calling the function results in the returned value to be "thrown away"

// let firstName = fullName.substring(0, fullName.indexOf(" "));
// firstName = capitalize(firstName);

/** CONTINUING ON FUNCTIONS...FEB 16TH THURSDAY */
// CALLBACKS & ARROWS

function greeting(firstName) {
  return `Hello ${firstName}`;
}
const sayHi = greeting; // calling back a function via the variable
console.log(sayHi("Harry"));

function congreet(firstName) {
  console.log(`Hello ${firstName}`);
}
// setTimeout(congreet, 100, "Ron");

//Trying out the callback function

const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};

const person4 = {
  firstName: "Fred",
  lastName: "Weasley",
  hired: true,
};

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

function fireOrHire(action, person) {
  action(person);
}

console.log(person3); //false by default
fireOrHire(hire, person3); // now we change it to true
console.log(person3); //so it's becomes true
console.clear();

//exercise loadJSON
//we don't hardcode url, only write the parameter
function loadJSON(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => prepareData(jsonData));
}

//if a function is used only as a callback, and not used anywhere else,
//and also not referred to anywhere else...
//it doesn't need a name

function prepareData(data) {
  console.log("preparing data");
  //receive data from json
  console.table(data);
}

// loadJSON("animals.json", prepareData);

// ARROW FUNCTIONS = ANONYMOUS FUNCTIONS
// Arrow functions with only one line don't need curly brackets
// If it's a single line it automatically returns that line
// But if there ismore, we need to write return

// HIGHER ORDER FUNCTIONS
console.clear();

const people = ["Harry", "Ron", "Hermione", "Neville"];

//this below is a name function;
function sayHello(person) {
  console.log(`Hello ${person}`);
}
people.forEach(sayHello);

/// this is an anonymous function, the 'person' parameter thing is just the reference, the word can be anything actually, bananas for ex.
people.forEach((person) => {
  console.log(`Hello ${person}`);
}); // this does excactly the same as functionSayhello + people.foreach.

function testParams(a, b, c, d) {
  console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}
people.forEach(testParams);
//goes crazy but it actually takes 4 parameters:
// value, index, full array, undefined;

// and can be rewritten as
people.forEach((a, b, c, d) => {
  console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
});

// ARRAY METHODS
// is-function: we define our own criteria
console.clear();

const animals = [
  {
    name: "Choko",
    type: "cat",
  },
  {
    name: "Leeloo",
    type: "dog",
  },
  {
    name: "Mia",
    type: "cat",
  },
  {
    name: "Rex",
    type: "dog",
  },
];

function isCat(animal) {
  console.log("looking for cats");
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

function isDog(animal) {
  console.log("looking for dogs");
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}

console.log(isCat(animals[0])); // return true
console.log(isCat(animals[1])); //return false
console.log(isCat(animals[2])); //return false
console.log(isCat(animals[3])); //return false

// testing filter on animals

function all(animal) {
  return true;
}
function none(animal) {
  return false;
}

animals.filter(all);
animals.filter(none);

console.log(animals.filter(all));
console.log(animals.filter(none));
/**all/none are the is-functions */

const onlyCats = animals.filter(isCat);
console.log(onlyCats); // gives me 2 arrays with cats

const onlyDogs = animals.filter(isDog);
console.log(onlyDogs); // gives me 2 arrays with cats

//on arrow functions
const button = document.querySelector(".button");

button.addEventListener("click", buttonClicked);

function buttonClicked(event) {
  event.target.style.backgroundColor = "red";
  event.target.removeEventListener("click", buttonClicked);
}
