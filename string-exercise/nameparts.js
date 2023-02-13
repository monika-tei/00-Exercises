"use strict";

const fullName = "Peter Heronimous Lind";

const firstSpace = fullName.indexOf(" ");

const lastSpace = fullName.lastIndexOf(" ");
//split the string into three variables: firstName, middleName and lastName.

// I'm using the substring to extract a portion of a string (startIndex, endIndex)
let firstName = fullName.substring(0, 5);
console.log(firstName);

let middleName = fullName.substring(firstSpace + 1, lastSpace);
console.log(middleName);

let lastName = fullName.substring(lastSpace + 1);
console.log(lastName);

/* Continued.... */
