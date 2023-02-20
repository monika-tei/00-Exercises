"use strict";
//monday feb 20

// recapping how to use forEach and filters;
// const names = ["Signe", "John", "Frank", "Lone", "Gwendolyn"];
// console.log("Names", names);

//for each, supplying one than more argument
//supplying funct with argumetn
// names.forEach(printNames);

// function printNames(element, index, arr) {
//   if (index === 0) {
//     console.log("Array:", arr);
//   }
//   console.log(`${element} has index number of ${index}`);
// }

// can also be written as
// if (index === arr.length -1)

/*--------------------Filter, another array method-----------*/

// let smallNames = names.filter(removeLongNames);

// function removeLongNames(name) {
//   let isLong;
//   if (name.length > 5) {
//     isLong = false;
//   } else {
//     isLong = true;
//   }
//   return isLong;
// }
// // is the same as shortened version:

// function removeLongNames(name) {
//   if (name.length > 5) {
//     return false;
//   }
//   return true;
// }

// //and also the same as this:
// //** Undefined is the same as false */

// function removeLongNames(name) {
//   return name.length <= 5;
// }

// console.log("short names", smallNames);

/** Moving onto the SORTING PART */

console.clear();
const vardai = ["Signe", "John", "Frank", "Lone", "Gwendolyn"];

console.log("names are", vardai);

vardai.sort();

function sortAlphabetically(nameA, nameB) {
  console.log(`${nameA} and ${nameB}`);
  if (nameA < nameB) {
    return -1;
  } else if (nameB < nameA) {
    return 1;
  } else {
    return 0;
  }
}
console.log("sortednames", vardai);
// if (nameA.length > nameB.length)

//Example sort by name
console.clear();
const animals = [
  {
    name: "signe",
    type: "honeybadger",
  },
  {
    name: "Frank",
    type: "cat",
  },
  {
    name: "Scoobydoo",
    type: "puppy",
  },
  {
    name: "Klaus",
    type: "dragon",
  },
  {
    name: "Peter",
    type: "cat",
  },
  {
    name: "Choko",
    type: "reptile",
  },
];

console.log("animals", animals);
animals.sort(compareByName);

function compareByName(animalA, animalB) {
  console.log(`animalA is ${animalA.name} and animalB is ${animalB.name}`);
  if (animalA.name < animalB.name) {
    return -1;
  } else if (animalA.name > animalB.name) {
    return 1;
  } else {
    return 0;
  }
}

console.log();

// so how do you filter and sort at the same time?
// 1. filter runs once, and displays less elements
