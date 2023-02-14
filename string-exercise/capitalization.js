"use strict";

const myName = "potter";

function formatName(myName) {
  return myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase();
}

let editedName = formatName(myName);
console.log(editedName);

/** CONTINUED  */

let str = "haris poteris";
//str is the parameter - the string you want to capitalize;
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

// another way without return
let capitalizedString = capitalize(str);
console.log(capitalizedString);

function capitalizeIt(string) {
  const capitalizedName = `${string.charAt(0).toUpperCase()}${string.slice(1).toLowerCase()}`;
  console.log(capitalizedName);
}

let string;
