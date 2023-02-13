"use strict";

// Expect the name to be a const - you can’t modify it.
const fullName = "Peter Heronimous Lind";

const firstSpace = fullName.indexOf(" ");

const lastSpace = fullName.lastIndexOf(" ");
//split the string into three variables: firstName, middleName and lastName.
// Hint: use indexOf and substring

let firstName = fullName.substring(0, 5);
console.log(firstName);

let middleName = fullName.substring(firstSpace + 1, lastSpace);
console.log(middleName);

let lastName = fullName.substring(lastSpace + 1);
console.log(lastName);

/* Continued on.... */
