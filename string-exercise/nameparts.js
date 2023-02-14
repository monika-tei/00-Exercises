"use strict";

const fullName = "peter heronimous lind";

// const firstSpace = fullName.indexOf(" ");

// const lastSpace = fullName.lastIndexOf(" ");
// //split the string into three variables: firstName, middleName and lastName.

// // I'm using the substring to extract a portion of a string (startIndex, endIndex)
// let firstName = fullName.substring(0, 5);
// console.log(firstName);

// let middleName = fullName.substring(firstSpace + 1, lastSpace);
// console.log(middleName);

// let lastName = fullName.substring(lastSpace + 1);
// console.log(lastName);

/* Continued.... */

/**Find the old code you made to split a string into three variables: firstName, middleName and lastName, and put it inside a function named getNameParts( fullname ), where fullname is the parameter, the string you want to split up.

Use your original code with indexOf and substring, don't "cheat" and use .split()!

Make sure that the function creates three new strings: firstName, middleName and lastName. Console.log them at the end of the function. You can console.log them as an object to make it easier, like console.log( { firstName, middleName, lastName } ); */

function getNameParts(fullName) {
  let firstName = fullName.substring(0, fullName.indexOf(" "));
  // Middle name: fix it so that the middleName is either null or undefined, if there were no middle name in the fullname!
  let middleName;
  if (fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" ")) === " ") {
    middleName = undefined;
  } else {
    middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
  }
  let lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

  console.log(`First name is ${firstName}`);
  console.log(`Middle name: ${middleName}`);
  console.log(`Last name: ${lastName}`);
}
getNameParts(fullName);
