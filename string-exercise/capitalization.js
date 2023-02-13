"use strict";
/**Use the 3caPitalization exercise as a basis for this exercise. 
 * Modify the code, so that only the first letter is upper case, and the rest is lower case.
Make sure that it can take names of any length! */

const myName = "harispoteris";

function formatName(myName) {
  let firstCharUp = myName.charAt(0).toUpperCase();
  let restOfName = myName.slice(1).toLowerCase();
  return firstCharUp + restOfName;
}

let editedName = formatName(myName);
console.log(editedName);
