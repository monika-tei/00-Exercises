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
  buttons.forEach(function (button) {
    button.addEventListener("click", sayHi);
  });

  // TODO: Add event-listeners to filter and sort buttons

  loadJSON();
}
function sayHi() {
  console.log("hi");
}

// function isCat(animal) {
//   console.log("looking for cats");
//   if (animal.type === "cat") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log("is a cat");

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

// we want to create a filtered list before we display it

function filteredList(animalType) {
  let filteredList = allAnimals;
  if (animalType === "cat") {
    //create a filtered list of only CATS
    // based on what button was clicked
    filteredList = allAnimals.filter(isCat);
  } else if (animalType === "dog") {
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
  return animal.type === "dog";
}

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
