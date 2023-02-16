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

loadJSON("animals.json", prepareData);
