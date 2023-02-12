"use strict";

//Basic Objects

let object = {
  firstName: "Peter",
  age: 43,
  student: false,
};
console.log(object);

//Properties in an object are in a random order, and can be addressed by name.

//Properties can be accessed by
// DOT NOTATIOn
console.log(`${object.firstName} is ${object.age}.`);

// objects can be read
let name = object.firstName;
console.log(name);

// objects can be written to
object.firstName = "Bob";
console.log(object.firstName);

// BRACKET NOTATION
console.log(`${object["firstName"]} is ${object["age"]}.`);

// getting properties with brackets
let fName = object["firstName"];
//setting with brackets
object["firstName"] = "Bob";
console.clear();

//ADDING Properties
let person1 = {
  firstname: "Peter",
  age: 43,
  student: false,
};
console.log(person1.lastName); //returns undefined
person1.lastName = "Tolstrup"; //added property
console.log(person1.lastName); //returnds last name we just added
console.log(person1); //viewing the whole object, we see LN as a property in brackets but not listed!

//REMOVING properties
delete person1.lastName;
console.log(person1.lastName); // returnds undefined
console.log(person1); //viewing the whole object now, we see 3 values but no trace of lastName property that was just deleted.

//DECLARING WITH CONST
