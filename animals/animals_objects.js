"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

//1. Create an object prototype - name it Animal.
const animalPrototype = {
  name: "",
  desc: "",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // 2.0 Create a new object (named animal) from the Animal prototype ++
    const animals = Object.create(animalPrototype);

    // Find the values for name, desc, and type from the jsonObject (it is recommended to create temporary variables for them)
    let values = jsonObject.fullname.split(" ");

    // Set the properties in the new object to those values
    animals.name = values[0];
    animals.desc = values[2];
    animals.type = values[3];
    animals.age = jsonObject.age;
    // Add the new object to the array of animals
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
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
