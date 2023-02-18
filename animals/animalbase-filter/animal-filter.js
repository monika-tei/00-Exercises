"use strict";

//The user must be able to filter the displayed list by animal type.

//Filter the model before it is being displayed.

//Function to build the list

//Function to display it

//List with all animal objects

//List with the only ones displayed

//When filter button is clicked, call a function with an event

//Function needs to know which filter is requested, and call another function to actually set the filter (either or)

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];
const buttons = document.querySelectorAll("button");

// const btnCat = document.getElementById("btnCat");
// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");
  // TODO: Add event-listeners to btn
  findButtons();
  loadJSON();
}
//UI for the filter buttons
function findButtons() {
  // console.log("test");
  document.querySelectorAll("[data-action='filter']").forEach((button) => button.addEventListener("click", chooseFilter));

  document.querySelectorAll("[data-action='sort']").forEach((button) => button.addEventListener("click", chooseSort));
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function chooseFilter(event) {
  const filter = event.target.dataset.filter;
  // event.target refers to the element that triggered the event, which in this case would be the button that was clicked.
  //The dataset property is a way to access the data- attributes of an element in JavaScript.
  // The above line is extracting the value of the data-filter attribute of the button element that was clicked and storing it in the filter variable. The value of filter will be either "cat" or "dog", depending on which button was clicked.
  console.log(`user chose ${filter}`);
  filteredList(filter);
}

// we want to create a filtered list before we display it
// filter for cats, for dogs, and all animals

function filteredList(filterBy) {
  let filteredList = allAnimals;
  if (filterBy === "cat") {
    //create a filtered list of only CATS
    filteredList = allAnimals.filter(isCat);
  } else if (filterBy === "dog") {
    filteredList = allAnimals.filter(isDog);
  }

  //display the list
  displayList(filteredList);
}
function isCat(animal) {
  console.log("found some cats");
  return animal.type === "cat";
}

function isDog(animal) {
  console.log("found some dogs");
  return animal.type === "dog";
}

/** Moving onto the sorting part, begin the same as with filtering */

function chooseSort(event) {
  const sortBy = event.target.dataset.sort;
  //camel case because of the hyphen sort-direction, becomes sortDirection
  const sortDir = event.target.dataset.sortDirection;

  // toggles direction
  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }

  console.log(`user sorting by ${sortBy} and ${sortDir}`);
  sortList(sortBy, sortDir);
}

// making this function into generic function that can take any parameter
// function sortList(sortBy) {
//   let sortedList = allAnimals;

//   if (sortBy === "name") {
//     sortedList = sortedList.sort(sortByName);
//   } else if (sortBy === "type") {
//     sortedList = sortedList.sort(sortByType);
//   }
//   displayList(sortedList);
// }

//Generic sort function

function sortList(sortBy, sortDir) {
  let sortedList = allAnimals;
  let direction = 1;
  //some code here
  if (sortDir === "desc") {
    direction = -1;
  } else {
    direction = 1;
  }

  sortedList = sortedList.sort(sortByProperty);

  //this function needs to stay within the function;
  function sortByProperty(animalA, animalB) {
    if (animalA[sortBy] < animalB[sortBy]) {
      return -1 * direction;
    } else {
      return 1 * direction;
    }
  }

  displayList(sortedList);
}

//changing the sort direction when the user clicks!

/*don't need this anymore*/

// function sortByName(animalA, animalB) {
//   if (animalA.name < animalB.name) {
//     return -1;
//   } else {
//     return 1;
//   }
// }

// function sortByType(animalA, animalB) {
//   if (animalA.type < animalB.type) {
//     return -1;
//   } else {
//     return 1;
//   }
// }

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
