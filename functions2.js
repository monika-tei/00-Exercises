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
const sayHi = greeting;
console.log(sayHi("Harry"));
