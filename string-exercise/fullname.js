"use strict";
//Test these combos:

// fullName("Potter", "Harry", "James"); should console.log "Harry James Potter"
// fullName("Potter", "Harry", "James");

//fullName("Potter", "Harry"); should console.log "Harry Potter"
// fullName("Potter", "Harry");

//fullName("Harry", "Potter"); should console.log "Potter Harry"
// fullName("Harry", "Potter");

//fullName("Potter", "Harry", "James", "Pottypotpot"); should console.log "Harry James Potter"
// fullName("Potter", "Harry", "James", "Pottypotpot");

// let studentName = "Harry James Potter";

// getNameParts(studentName);

// function getNameParts(studentName) {
//   let firstName;
//   let middleName;
//   let lastName;
//   //w/o middle name;
//   if (studentName.split(" ").length <= 2) {
//     console.log(studentName.split(" ").length);
//     firstName = studentName.substring(0, studentName.indexOf(" "));
//     lastName = studentName.substring(studentName.lastIndexOf(" ") + 1);
//     middleName = undefined;
//   }
//   // with middle name
//   else {
//     firstName = studentName.substring(0, studentName.indexOf(" "));
//     lastName = studentName.substring(studentName.lastIndexOf(" ") + 1);
//     middleName = studentName.substring(studentName.indexOf(" ") + 1, studentName.lastIndexOf(" "));
//     // console.log(`${firstName} ${middleName} ${lastName}`);
//   }

//   fullName(lastName, firstName, middleName);
// }

// function receive 3 parameters

// function fullName(lastName, firstName, middleName) {
//   if (middleName === undefined) {
//     console.log(`Full name without middle name is: ${firstName} ${lastName}`);
//   } else {
//     console.log(`A full name: ${firstName} ${middleName} ${lastName}`);
//   }
// }

/** Full name using return in function */

// one way of doing this
const firstName = "peter";
const lastName = "lind";
const middleName = "heronimous";
// function must first be declared before it is used

function getFullName(lastName, firstName, middleName) {
  if (middleName === undefined) {
    return `${firstName} ${lastName}`;
  } else {
    return `${firstName} ${lastName} ${middleName}`;
  }
}

const fullName = getFullName(lastName, firstName, middleName);
console.log(fullName);

// function splits the string into an array of words and capitalizes first letter of each word
function capitalized(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const capitalizedName = capitalized(fullName);
console.log(capitalizedName);

// not exactly sure how to connect these properly
// function capitalized(str) {
//   str = str.split(" ");
//   for (let i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1).toLowerCase();
//   }
//   str = str.join(" ");
//   // return str;
//   return str;
// }
