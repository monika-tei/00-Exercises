"use strict";

// ex1-a
function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
}
sayHello("Sinnead!");

// ex1-b1 called earlier than created
sayHello("Sinnead!"); // Hello Sinnead!
function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
}

// ex1-b2 called earlier than created
function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
}
let myName = "moooonika";
sayHello(myName); //becomes monika

// ex1-b3 another var outside the function

let firstName = "Monikukas";
sayHello(firstName); //  Hello Monikukas

// ex1-b4 function called w/o parameter
sayHello(); // hello undefined

// ex1-b5 function called with firstName and lastName
const myfirstName = "sinneadddd";
const mylastName = "O'connor";

function sayHello(myfirstName, mylastName) {
  console.log(`Hello ${myfirstName} ${mylastName}`);
}
sayHello(myfirstName, mylastName);

// sayHello(firstName, lastName); // error-last name not defined

sayHello(mylastName, myfirstName);

// ex1-b6 function called with lastName and firstName
function sayHello(firstName) {
  console.log(`Hello ${firstName}`); // Hello Sinnead!
}
// sayHello(lastName, firstName); // error - last name not defined

/*--------------------------------------------------------------- */
// Exercise presentPet
// function receives three parameters
console.clear();

let frstName = "Vaiva";
let animalType = "Dinosaur";
let animaName = "Rex";

function presentPet(frstName, animalType, animalName) {
  console.log(`My name is ${frstName}, I have a ${animalType} called ${animalName}.`);
}
presentPet(frstName + " the great", animalType, animaName);
//called with variables named the same as parameters
//as in:
// let frstNamename = "Vaiva";
// let animalTypeType = "Dinosaur"

// presentPet(frstName, animalType, animaName); // nothing happens

//function called with variables named smth different

// function called with strings
// presentPet("Mon", "cat", "Choko");
presentPet(animalType, frstName, animaName);

// function called with mix of strings and variables
presentPet("Mon", animalType, animaName); //works

// function called with variables but in different order
// presentPet(animalType, frstName, animaName); // works!

//Other stuff
// const pirmasVardas = "Freddie"; //  now it's working
function sakykHello(pirmasVardas, antrasVardas) {
  pirmasVardas = "Tom";
  antrasVardas = "Kruger";
  console.log(`Hello ${pirmasVardas} ${antrasVardas}`);
}
const manoVardas = "Sinnead";
const manoPavarde = "O'connor";
sakykHello(manoVardas, manoPavarde); // already been declared

// Hello Tom Kruger, ,overwrites both parameters!
// we can change global variable unless it's a CONST
