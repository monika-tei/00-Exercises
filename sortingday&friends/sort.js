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

let cal = 0;

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
    type: "puppy",
  },
  {
    name: "Peter",
    type: "cat",
  },
  {
    name: "Choko",
    type: "cat",
  },
  {
    name: undefined,
    type: "cat",
  },
];

console.log("animals", animals);

const cats = animals.filter(findCats);

// an anonymous function would be like
// const catss = animals.filter((animal) => {
//   cal++;
//   return animals.type === "cat";
// });

function findCats(animals) {
  cal++;
  return animals.type === "cat";
}

console.log("filtered cats", cats);

cats.sort(compareByName);

function compareByName(animalA, animalB) {
  cal++;
  if (animalA.name < animalB.name) {
    return -1;
  } else if (animalA.name > animalB.name) {
    return 1;
  } else {
    return 0;
  }
}
console.log("calculations:", cal);
// console.log("cats sorted", cats);

// so how do you filter and sort at the same time?
// 1. filter runs once, and displays less elements
// 2. sort then filter
