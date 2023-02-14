"use strict";

// const myName = "potter";

// function formatName(myName) {
//   return myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase();
// }

// let editedName = formatName(myName);
// console.log(editedName);

/** CONTINUED  */

let str = "haris poteris";
//str is the parameter - the string you want to capitalize;
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

/**FEB14 --- FUNCTION + RETURN */

function capitalized(str) {
  const capitalizedName = `${str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()}`;
  return capitalizedName;
}

let name = capitalized("mOnIKA");
console.log(name);
