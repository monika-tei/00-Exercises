"use strict";

const myName = "Monika";

// grab the character on the 2nd index and make it uppercase;
let thirdletter = myName.charAt(2);
let thirdLetterUp = thirdletter.toUpperCase();
// make everything else lowercase;
let nameStart = myName.slice(0, 2).toLowerCase();
let nameEnd = myName.slice(3).toLowerCase();

let newName = nameStart + thirdLetterUp + nameEnd;

console.log(newName);
