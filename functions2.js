"use strict";

// function myFunc() {
//   let value = "hi";
//   return value;
// }
// let result = myFunc();
// console.log(result);

//ex1

function greeting(firstName) {
  return `Hello ${firstName}`;
}
let result = greeting("Peter");
console.log(result);

//ex2
// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// let result = greeting("any name");
// console.log(result);

//2
console.log(greeting("any name")); // hello any name
//3
console.log(greeting()); // hello undefined
//4
const txt = `Greeting is ${greeting("a name")}`;
console.log(txt); // Greeting is Hello a name;
//5
